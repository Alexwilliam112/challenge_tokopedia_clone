"use client";
import Rekomendasi from "@/components/search/rekomendasi";
import SearchList from "@/components/search/searchList";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SuccessModal from "@/components/modals/successMessage";
import ErrorModal from "@/components/modals/errorMessage";

export default function SearchPage() {
  const searchParams = useSearchParams();

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [products, setProducts] = useState([]);
  const value = searchParams.get('search') || '';

  const fetchProducts = async (value: string, page: number) => {
    try {
      const response = await fetch(`/api/search?value=${value}&page=${page}`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      
      setProducts(data.result);
      setTotalPage(Number(data.totalPage));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    let page = 1
    fetchProducts(value, page)
  }, [value])

  useEffect(() => {
    fetchProducts(value, page);
  }, [page]);

  return (
    <>
      <div className="pageBody2">
        <SuccessModal />
        <ErrorModal/>
        <SearchList products={products} />
        <Rekomendasi />
      </div>
    </>
  );
}
