import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { BarChart3, Monitor, Smartphone, Tablet, Globe } from "lucide-react";
import { toast } from "sonner";

interface AnalyticsData {
  total_scans: number;
  device_breakdown: { device_type: string; count: number }[];
  browser_breakdown: { browser: string; count: number }[];
  recent_scans: { scanned_at: string; qr_content: string }[];
}

export const QRAnalytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const { data: scans, error } = await supabase
        .from('qr_analytics')
        .select('*')
        .order('scanned_at', { ascending: false });

      if (error) throw error;

      if (scans) {
        // Calculate total scans
        const total_scans = scans.length;

        // Device breakdown
        const deviceMap = new Map<string, number>();
        scans.forEach(scan => {
          const count = deviceMap.get(scan.device_type || 'unknown') || 0;
          deviceMap.set(scan.device_type || 'unknown', count + 1);
        });
        const device_breakdown = Array.from(deviceMap.entries()).map(([device_type, count]) => ({
          device_type,
          count
        }));

        // Browser breakdown
        const browserMap = new Map<string, number>();
        scans.forEach(scan => {
          const count = browserMap.get(scan.browser || 'unknown') || 0;
          browserMap.set(scan.browser || 'unknown', count + 1);
        });
        const browser_breakdown = Array.from(browserMap.entries()).map(([browser, count]) => ({
          browser,
          count
        }));

        // Recent scans
        const recent_scans = scans.slice(0, 5).map(scan => ({
          scanned_at: scan.scanned_at,
          qr_content: scan.qr_content
        }));

        setAnalytics({
          total_scans,
          device_breakdown,
          browser_breakdown,
          recent_scans
        });
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
      toast.error("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  };

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType.toLowerCase()) {
      case 'mobile': return <Smartphone className="w-4 h-4" />;
      case 'tablet': return <Tablet className="w-4 h-4" />;
      default: return <Monitor className="w-4 h-4" />;
    }
  };

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">Loading analytics...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">QR Code Analytics</h2>
          <p className="text-muted-foreground">Track and analyze your QR code scans</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Scans</CardTitle>
              <BarChart3 className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics?.total_scans || 0}</div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Top Device</CardTitle>
              <Smartphone className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize">
                {analytics?.device_breakdown[0]?.device_type || 'N/A'}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Top Browser</CardTitle>
              <Globe className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {analytics?.browser_breakdown[0]?.browser || 'N/A'}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>Device Breakdown</CardTitle>
              <CardDescription>Scans by device type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics?.device_breakdown.map((item) => (
                  <div key={item.device_type} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getDeviceIcon(item.device_type)}
                      <span className="capitalize">{item.device_type}</span>
                    </div>
                    <span className="font-semibold">{item.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>Browser Breakdown</CardTitle>
              <CardDescription>Scans by browser</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics?.browser_breakdown.map((item) => (
                  <div key={item.browser} className="flex items-center justify-between">
                    <span>{item.browser}</span>
                    <span className="font-semibold">{item.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
