-- Create QR analytics table for tracking scans
CREATE TABLE IF NOT EXISTS public.qr_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  qr_code_hash TEXT NOT NULL,
  qr_content TEXT NOT NULL,
  scanned_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  country TEXT,
  city TEXT,
  device_type TEXT,
  browser TEXT
);

-- Enable Row Level Security
ALTER TABLE public.qr_analytics ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public reading of analytics (for dashboard)
CREATE POLICY "Anyone can view QR analytics"
ON public.qr_analytics
FOR SELECT
USING (true);

-- Create policy to allow public insertion of scan events
CREATE POLICY "Anyone can track QR scans"
ON public.qr_analytics
FOR INSERT
WITH CHECK (true);

-- Create index for better query performance
CREATE INDEX idx_qr_code_hash ON public.qr_analytics(qr_code_hash);
CREATE INDEX idx_scanned_at ON public.qr_analytics(scanned_at DESC);