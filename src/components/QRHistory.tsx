import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Clock } from "lucide-react";
import { format } from "date-fns";

interface QRHistoryItem {
  id: string;
  value: string;
  type: string;
  fgColor: string;
  bgColor: string;
  timestamp: number;
}

interface QRHistoryProps {
  history: QRHistoryItem[];
  onLoadItem: (item: QRHistoryItem) => void;
  onClearHistory: () => void;
}

export const QRHistory = ({ history, onLoadItem, onClearHistory }: QRHistoryProps) => {
  if (history.length === 0) {
    return (
      <div className="text-center py-12">
        <Clock className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">No History Yet</h3>
        <p className="text-muted-foreground">
          Your generated QR codes will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground">QR Code History</h3>
          <p className="text-muted-foreground">Recently generated QR codes</p>
        </div>
        <Button
          onClick={onClearHistory}
          variant="destructive"
          size="sm"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear All
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {history.map((item) => (
          <Card
            key={item.id}
            className="cursor-pointer hover:shadow-elegant transition-all hover:-translate-y-1"
            onClick={() => onLoadItem(item)}
          >
            <CardContent className="p-4 space-y-3">
              <div className="aspect-square rounded-lg border border-border/50 flex items-center justify-center p-4" style={{ backgroundColor: item.bgColor }}>
                <div className="w-full h-full rounded" style={{ backgroundColor: item.fgColor, opacity: 0.2 }} />
              </div>
              <div>
                <p className="font-medium text-sm text-foreground truncate">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {format(new Date(item.timestamp), "MMM d, yyyy 'at' h:mm a")}
                </p>
                <div className="flex gap-2 mt-2">
                  <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: item.fgColor }} />
                  <div className="w-6 h-6 rounded border border-border" style={{ backgroundColor: item.bgColor }} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};