export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products",
        }),
        getCategories: builder.query({
            query: () => "products/categories",
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductByIdQuery } = productsApi;
