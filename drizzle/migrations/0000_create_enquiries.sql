CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reference text NOT NULL UNIQUE,
  client_token uuid NOT NULL UNIQUE,
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 40),
  company text CHECK (company IS NULL OR char_length(company) <= 120),
  service text NOT NULL CHECK (char_length(service) BETWEEN 1 AND 160),
  service_slug text CHECK (service_slug IS NULL OR char_length(service_slug) <= 200),
  budget text CHECK (budget IS NULL OR char_length(budget) <= 60),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 3000),
  recipient text NOT NULL DEFAULT 'wanderinfinitymedia@gmail.com',
  email_status text NOT NULL DEFAULT 'pending' CHECK (email_status IN ('pending','sent','failed','not_configured')),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.enquiries TO anon, authenticated;
GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors can submit enquiries"
ON public.enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (recipient = 'wanderinfinitymedia@gmail.com' AND email_status IN ('pending','not_configured'));