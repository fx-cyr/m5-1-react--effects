import React, {useEffect} from 'react';

const useDocTitleHook = (title, fallBackTitle) => {
    useEffect(() => {
        document.title = title
    })
    return document.title = fallBackTitle
}

export default useDocTitleHook;