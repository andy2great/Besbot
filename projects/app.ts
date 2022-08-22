import { serve } from '../deps.ts';

serve(req => new Response("Hello World v1\n"));