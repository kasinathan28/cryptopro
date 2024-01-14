// components/SearchBar.tsx
import React, { useState } from "react";
import style from "./searchBar.module.css";
import SearchResultTable from "../searchResult/searchResultTable";
import { searchCoins, Coin } from "@/modules/dashboard/services/searchCoins";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Coin[]>([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL1;

  const handleSearch = async () => {
    try {
      if (!apiUrl) {
        console.log("API URL not set");
        return;
      }

      const data = await searchCoins(apiUrl, query);
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching coins:", error);
    }
  };

  return (
    <div>
      <input
        className={style.input}
        type="search"
        placeholder="Search....."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={style.button} onClick={handleSearch}>
        Search
      </button>

      {searchResults.length > 0 && (
        <SearchResultTable searchResults={searchResults} />
      )}
    </div>
  );
};

export default SearchBar;
