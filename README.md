# Starworld-Planet


#### SPA/MPA

- The assignment was very limited and basic functionlity was required.
- Because it's simple application and SEO is not much required.
- I chose to pick SPA with having PWA integration within it.

#### Build tool and chunking

- For make fast build process, Vite is being used and chuking not required as build size is small.

#### Pagination Hook

```
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
export const usePagination = ({ totalRecords, pageSize, initialPage }: IUsePage) => {
    .....
    return {
        pages: noOfPages,
        currentPage,
        handleNext,
        handlePrevious,
        handlePage
    }
    ....
}
```
#### Paging component
```
    PAGE_SIZE: 5 (default)
```
#### CSS framework and themeing

- Bulma

#### Build is deplyed on netlify
```
https://dainty-puppy-edaf5d.netlify.app/
```

```
yarn install

```

#### Run App

```
run on develop - yarn dev
for build: yarn build
lint: yarn lint
```
