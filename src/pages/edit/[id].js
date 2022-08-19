import { useRouter } from 'next/router';

export default function Edit() {
	const router = useRouter();
	const { id } = router.query;

	return <h1>Edit video title {id}</h1>;
}
