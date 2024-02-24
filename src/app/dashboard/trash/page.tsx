"use client";

import { FileBrowser } from "../_components/file-browser";

export default function FavoritesPage() {
  return (
    <div>
      <FileBrowser title="Trash" deletedOnly />
    </div>
  );
}
