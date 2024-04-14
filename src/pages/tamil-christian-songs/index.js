
import Home, { getData } from './page';

export const getServerSideProps = async () => {
    const initialPage = 1;
    const { data, totalCount } = await getData(initialPage);

    return {
        props: {
            data,
            totalCount
        }
    };
}

export default Home ;
