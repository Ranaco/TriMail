import { Polybase } from "@polybase/client";

const POLY_NAMESPACE = process.env.NEXT_PUBLIC_POLY_NAMESPACE;

export const triMailDB = new Polybase({
  baseURL: POLY_NAMESPACE,
});

interface PolybaseServiceProps {}

class PolybaseService implements PolybaseServiceProps {}
