import { useState } from 'react';

export type IUsePage = {
    totalRecords: any[],
    pageSize: number,
    initialPage?: number
}

export type IReturnPageHooks = {
    /** number of pages */
    pages: number;
    /** return current page number */
    currentPage: number;
    /** function to trigger on next */
    handleNext: () => void;
    /** function to trigger on prev */
    handlePrevious: () => void;
    /** function to trigger on page nunber click */
    handlePage: (page: number) => void;
}

export const usePagination = ({ totalRecords, pageSize, initialPage }: IUsePage): IReturnPageHooks => {
    const [currentPage, setCurrentPage] = useState<number>(initialPage ?? 1);
    const noOfPages = Math.ceil(totalRecords.length / pageSize);
    const handleNext = () => { setCurrentPage(currentPage + 1) };
    const handlePrevious = () => { setCurrentPage(currentPage - 1) };
    const handlePage = (pageNum: number) => { setCurrentPage(pageNum) }
    return {
        pages: noOfPages,
        currentPage,
        handleNext,
        handlePrevious,
        handlePage
    }
}