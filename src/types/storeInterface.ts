interface StoreInit {
  cards: [],
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string,
}

export type { StoreInit };

