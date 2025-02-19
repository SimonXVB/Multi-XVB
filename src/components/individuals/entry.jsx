export function Entry({media, play, renameModal, deleteModal, check, isSelect}) {
    return (
        <div className="border-2 border-red-400 flex items-center justify-between h-[55px] my-4 pl-2">
            <div className="flex">
                {isSelect && 
                    <input type="checkbox" onClick={check} className="m-1 cursor-pointer w-[20px] accent-red-400"/>
                }
                <div className="flex whitespace-nowrap text-2xl w-[500px] overflow-x-auto font-bold">{media}</div>
            </div>
            <div className="flex h-full pl-2">
                <button onClick={play} className="h-full px-4 cursor-pointer bg-gray-900 hover:bg-red-400">
                    <img src="../src/assets/libraryAssets/play.png" className="w-[24px] h-[24px]"/>
                </button>
                <button onClick={renameModal} className="h-full px-4 cursor-pointer bg-gray-900 hover:bg-red-400">
                    <img src="../src/assets/libraryAssets/edit.png" className="w-[24px] h-[24px]"/>
                </button>
                <button onClick={deleteModal} className="h-full px-4 cursor-pointer bg-gray-900 hover:bg-red-400">
                    <img src="../src/assets/libraryAssets/delete.png" className="w-[24px] h-[24px]"/>
                </button>
            </div>
        </div>
    );
};