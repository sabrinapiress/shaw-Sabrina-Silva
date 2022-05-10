import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const PostsPage = () => {
  useProtectedPage()
  return (
    <div>
      Post
    </div>
  );
}
