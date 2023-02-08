import { useRouter } from 'next/router';

const Movie = () => {
    const router = useRouter();
    const { id } = router.query;

    return <p>This is id: {id}</p>
}

export default Movie;