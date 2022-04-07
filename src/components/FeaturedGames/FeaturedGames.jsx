import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { GamesCard, Pagination } from "../../components";
import { useFilter, useLoader } from "../../context";
import { productsService } from "../../services";
import { filterHandler } from "../../utilities";
import styles from "./FeaturedGames.module.css";

let filteredProducts = [];
const FeaturedGames = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState({
    pageNo: 1,
    isFiltered: false,
  });
  const [paginatedData, setPaginatedData] = useState([]);
  const { filterState } = useFilter();
  const { setLoader } = useLoader();

  useEffect(() => {
    setLoader(true);
    (async () => {
      try {
        const response = await productsService();
        setData(response.data.products);
        setTimeout(() => setLoader(false), 1000);
      } catch (error) {
        setLoader(false);
        toast.warning(error.response.data.errors[0]);
      }
    })();
  }, []);

  useEffect(() => {
    setPage({
      pageNo: 1,
      isFiltered:
        filterState.categories.length === 0 &&
        filterState.rating === "" &&
        filterState.priceRange === "300" &&
        filterState.search === ""
          ? false
          : true,
    });
    filteredProducts = filterHandler(
      data,
      filterState.sortBy,
      filterState.categories,
      filterState.rating,
      filterState.priceRange,
      filterState.search
    );
    setPaginatedData(
      filteredProducts.slice(page.pageNo * 10 - 10, page.pageNo * 10)
    );
  }, [filterState, data]);

  useEffect(() => {
    setPaginatedData(
      filteredProducts.slice(page.pageNo * 10 - 10, page.pageNo * 10)
    );
  }, [page.pageNo]);

  return (
    <div className={styles.featuredGamesWrapper}>
      <div className={styles.productsHeading}>
        <h5 className="h-5">Featured Games</h5>
        <p className={styles.showingProductsCaption}>
          (showing {filteredProducts.length} products)
        </p>
      </div>
      <section className={styles.mainProducts}>
        {paginatedData.length > 0 ? (
          paginatedData.map((item) => <GamesCard key={item._id} item={item} />)
        ) : (
          <h5 className="h-5">No Products Found</h5>
        )}
      </section>
      {page.pageNo > 1 || filteredProducts.length >= page.pageNo * 10 ? (
        <Pagination
          totalPages={
            page.isFiltered
              ? Math.ceil(filteredProducts.length / 10)
              : Math.ceil(data.length / 10)
          }
          pageNo={page.pageNo}
          setPage={setPage}
        />
      ) : null}
    </div>
  );
};

export { FeaturedGames };
