"use client";

import { Search } from "lucide-react";
import Input from "./Input";

interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({
  placeholder = "Pesquisar...",
}: SearchInputProps) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-zinc-500
        "
      />

      <Input placeholder={placeholder} className="pl-11" />
    </div>
  );
}
