import { useState } from "react";
import { useScrollObserver } from "./Hooks/useScrollObserver";
import { useEffect } from "react";
import { SyncLoader } from "react-spinners";

function ImageList({ imageList }) {
    return (
        <ul>
            {imageList.map((image) => {
                return (
                    <li key={image.id}>
                        <img style={{ width: 300 }} src={image.download_url} alt="" />
                    </li>
                );
            })}
        </ul>
    );
}

function App() {
    const [imageList, setImageList] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const isBottom = useScrollObserver();

    async function fetchImages(pageNumber) {
        setIsLoading(true);
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=5`);

            if (!response.ok) {
                throw new Error("네트워크에 문제가 있습니다!");
            }

            const data = await response.json();
            setImageList((prevImageList) => [...prevImageList, ...data]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (isBottom && !isLoading) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [isBottom]);

    useEffect(() => {
        fetchImages(page);
    }, [page]);

    return (
        <div>
            <ImageList imageList={imageList} />
            {isLoading && <SyncLoader />}
        </div>
    );
}

export default App;
