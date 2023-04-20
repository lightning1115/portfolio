import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Kevin Huston - ${pageTitle}`;
	}, [pageTitle]);
};
