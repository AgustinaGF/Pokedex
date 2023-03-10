import styles from "./styles.module.scss";

interface Props {
	perPage: number;
	page: number;
	nextPage: () => void;
	previousPage: () => void;
	maxItems: number;
}

export const Pagination = ({
	perPage,
	page,
	nextPage,
	previousPage,
	maxItems,
}: Props) => {
	const lastPage = Math.ceil(maxItems / perPage);
	return (
		<div className={styles.pagination}>
			<button onClick={previousPage} disabled={page === 1}>
				&lt;
			</button>
			<span style={{ color: "white" }}>{page}</span>
			<button disabled={page === lastPage} onClick={nextPage}>
				&gt;
			</button>
		</div>
	);
};
