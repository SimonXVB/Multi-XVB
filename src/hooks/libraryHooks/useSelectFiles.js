import { useState } from "react";

export function useSelectFiles() {
    const [isSelect, setIsSelect] = useState(false);
    const [selectedEntries, setSelectedEntries] = useState([]);

    function isChecked(event, media) {
        if(!event.target.checked) {
            setSelectedEntries(selectedEntries.filter((e) => e !== media));
        } else {
            setSelectedEntries([...selectedEntries, media]);
        };
    };

    function toggleSelect() {
        if(isSelect) {
            setIsSelect(false);
            setSelectedEntries([]);
        } else {
            setIsSelect(true);
            setSelectedEntries([]);
        };
    };

    return { isChecked, toggleSelect, setIsSelect, isSelect, setSelectedEntries, selectedEntries }
};