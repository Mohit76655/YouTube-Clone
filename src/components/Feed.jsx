import React, { useContext, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
const Feed = () => {
  const { loading, searchResult } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)] ">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-auto bg-[#0F0F0F] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#ffffffee] hover:scrollbar-thumb-[#ffffff80] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResult.map((item) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
