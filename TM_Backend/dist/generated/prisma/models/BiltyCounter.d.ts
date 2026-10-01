import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BiltyCounter
 *
 */
export type BiltyCounterModel = runtime.Types.Result.DefaultSelection<Prisma.$BiltyCounterPayload>;
export type AggregateBiltyCounter = {
    _count: BiltyCounterCountAggregateOutputType | null;
    _avg: BiltyCounterAvgAggregateOutputType | null;
    _sum: BiltyCounterSumAggregateOutputType | null;
    _min: BiltyCounterMinAggregateOutputType | null;
    _max: BiltyCounterMaxAggregateOutputType | null;
};
export type BiltyCounterAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    lastBiltyNumber: number | null;
};
export type BiltyCounterSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    lastBiltyNumber: number | null;
};
export type BiltyCounterMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    lastBiltyNumber: number | null;
};
export type BiltyCounterMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    lastBiltyNumber: number | null;
};
export type BiltyCounterCountAggregateOutputType = {
    id: number;
    userId: number;
    lastBiltyNumber: number;
    _all: number;
};
export type BiltyCounterAvgAggregateInputType = {
    id?: true;
    userId?: true;
    lastBiltyNumber?: true;
};
export type BiltyCounterSumAggregateInputType = {
    id?: true;
    userId?: true;
    lastBiltyNumber?: true;
};
export type BiltyCounterMinAggregateInputType = {
    id?: true;
    userId?: true;
    lastBiltyNumber?: true;
};
export type BiltyCounterMaxAggregateInputType = {
    id?: true;
    userId?: true;
    lastBiltyNumber?: true;
};
export type BiltyCounterCountAggregateInputType = {
    id?: true;
    userId?: true;
    lastBiltyNumber?: true;
    _all?: true;
};
export type BiltyCounterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BiltyCounter to aggregate.
     */
    where?: Prisma.BiltyCounterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BiltyCounters to fetch.
     */
    orderBy?: Prisma.BiltyCounterOrderByWithRelationInput | Prisma.BiltyCounterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BiltyCounterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BiltyCounters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BiltyCounters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BiltyCounters
    **/
    _count?: true | BiltyCounterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BiltyCounterAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BiltyCounterSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BiltyCounterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BiltyCounterMaxAggregateInputType;
};
export type GetBiltyCounterAggregateType<T extends BiltyCounterAggregateArgs> = {
    [P in keyof T & keyof AggregateBiltyCounter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBiltyCounter[P]> : Prisma.GetScalarType<T[P], AggregateBiltyCounter[P]>;
};
export type BiltyCounterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BiltyCounterWhereInput;
    orderBy?: Prisma.BiltyCounterOrderByWithAggregationInput | Prisma.BiltyCounterOrderByWithAggregationInput[];
    by: Prisma.BiltyCounterScalarFieldEnum[] | Prisma.BiltyCounterScalarFieldEnum;
    having?: Prisma.BiltyCounterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BiltyCounterCountAggregateInputType | true;
    _avg?: BiltyCounterAvgAggregateInputType;
    _sum?: BiltyCounterSumAggregateInputType;
    _min?: BiltyCounterMinAggregateInputType;
    _max?: BiltyCounterMaxAggregateInputType;
};
export type BiltyCounterGroupByOutputType = {
    id: number;
    userId: number;
    lastBiltyNumber: number;
    _count: BiltyCounterCountAggregateOutputType | null;
    _avg: BiltyCounterAvgAggregateOutputType | null;
    _sum: BiltyCounterSumAggregateOutputType | null;
    _min: BiltyCounterMinAggregateOutputType | null;
    _max: BiltyCounterMaxAggregateOutputType | null;
};
export type GetBiltyCounterGroupByPayload<T extends BiltyCounterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BiltyCounterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BiltyCounterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BiltyCounterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BiltyCounterGroupByOutputType[P]>;
}>>;
export type BiltyCounterWhereInput = {
    AND?: Prisma.BiltyCounterWhereInput | Prisma.BiltyCounterWhereInput[];
    OR?: Prisma.BiltyCounterWhereInput[];
    NOT?: Prisma.BiltyCounterWhereInput | Prisma.BiltyCounterWhereInput[];
    id?: Prisma.IntFilter<"BiltyCounter"> | number;
    userId?: Prisma.IntFilter<"BiltyCounter"> | number;
    lastBiltyNumber?: Prisma.IntFilter<"BiltyCounter"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BiltyCounterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastBiltyNumber?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type BiltyCounterWhereUniqueInput = Prisma.AtLeast<{
    userId?: number;
    AND?: Prisma.BiltyCounterWhereInput | Prisma.BiltyCounterWhereInput[];
    OR?: Prisma.BiltyCounterWhereInput[];
    NOT?: Prisma.BiltyCounterWhereInput | Prisma.BiltyCounterWhereInput[];
    id?: Prisma.IntFilter<"BiltyCounter"> | number;
    lastBiltyNumber?: Prisma.IntFilter<"BiltyCounter"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "userId">;
export type BiltyCounterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastBiltyNumber?: Prisma.SortOrder;
    _count?: Prisma.BiltyCounterCountOrderByAggregateInput;
    _avg?: Prisma.BiltyCounterAvgOrderByAggregateInput;
    _max?: Prisma.BiltyCounterMaxOrderByAggregateInput;
    _min?: Prisma.BiltyCounterMinOrderByAggregateInput;
    _sum?: Prisma.BiltyCounterSumOrderByAggregateInput;
};
export type BiltyCounterScalarWhereWithAggregatesInput = {
    AND?: Prisma.BiltyCounterScalarWhereWithAggregatesInput | Prisma.BiltyCounterScalarWhereWithAggregatesInput[];
    OR?: Prisma.BiltyCounterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BiltyCounterScalarWhereWithAggregatesInput | Prisma.BiltyCounterScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"BiltyCounter"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"BiltyCounter"> | number;
    lastBiltyNumber?: Prisma.IntWithAggregatesFilter<"BiltyCounter"> | number;
};
export type BiltyCounterCreateInput = {
    id?: number;
    lastBiltyNumber?: number;
    user: Prisma.UserCreateNestedOneWithoutBiltyCounterInput;
};
export type BiltyCounterUncheckedCreateInput = {
    id?: number;
    userId: number;
    lastBiltyNumber?: number;
};
export type BiltyCounterUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lastBiltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutBiltyCounterNestedInput;
};
export type BiltyCounterUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastBiltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BiltyCounterCreateManyInput = {
    id?: number;
    userId: number;
    lastBiltyNumber?: number;
};
export type BiltyCounterUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lastBiltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BiltyCounterUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastBiltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BiltyCounterNullableScalarRelationFilter = {
    is?: Prisma.BiltyCounterWhereInput | null;
    isNot?: Prisma.BiltyCounterWhereInput | null;
};
export type BiltyCounterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastBiltyNumber?: Prisma.SortOrder;
};
export type BiltyCounterAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastBiltyNumber?: Prisma.SortOrder;
};
export type BiltyCounterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastBiltyNumber?: Prisma.SortOrder;
};
export type BiltyCounterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastBiltyNumber?: Prisma.SortOrder;
};
export type BiltyCounterSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastBiltyNumber?: Prisma.SortOrder;
};
export type BiltyCounterCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BiltyCounterCreateWithoutUserInput, Prisma.BiltyCounterUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.BiltyCounterCreateOrConnectWithoutUserInput;
    connect?: Prisma.BiltyCounterWhereUniqueInput;
};
export type BiltyCounterUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BiltyCounterCreateWithoutUserInput, Prisma.BiltyCounterUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.BiltyCounterCreateOrConnectWithoutUserInput;
    connect?: Prisma.BiltyCounterWhereUniqueInput;
};
export type BiltyCounterUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BiltyCounterCreateWithoutUserInput, Prisma.BiltyCounterUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.BiltyCounterCreateOrConnectWithoutUserInput;
    upsert?: Prisma.BiltyCounterUpsertWithoutUserInput;
    disconnect?: Prisma.BiltyCounterWhereInput | boolean;
    delete?: Prisma.BiltyCounterWhereInput | boolean;
    connect?: Prisma.BiltyCounterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BiltyCounterUpdateToOneWithWhereWithoutUserInput, Prisma.BiltyCounterUpdateWithoutUserInput>, Prisma.BiltyCounterUncheckedUpdateWithoutUserInput>;
};
export type BiltyCounterUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BiltyCounterCreateWithoutUserInput, Prisma.BiltyCounterUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.BiltyCounterCreateOrConnectWithoutUserInput;
    upsert?: Prisma.BiltyCounterUpsertWithoutUserInput;
    disconnect?: Prisma.BiltyCounterWhereInput | boolean;
    delete?: Prisma.BiltyCounterWhereInput | boolean;
    connect?: Prisma.BiltyCounterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BiltyCounterUpdateToOneWithWhereWithoutUserInput, Prisma.BiltyCounterUpdateWithoutUserInput>, Prisma.BiltyCounterUncheckedUpdateWithoutUserInput>;
};
export type BiltyCounterCreateWithoutUserInput = {
    id?: number;
    lastBiltyNumber?: number;
};
export type BiltyCounterUncheckedCreateWithoutUserInput = {
    id?: number;
    lastBiltyNumber?: number;
};
export type BiltyCounterCreateOrConnectWithoutUserInput = {
    where: Prisma.BiltyCounterWhereUniqueInput;
    create: Prisma.XOR<Prisma.BiltyCounterCreateWithoutUserInput, Prisma.BiltyCounterUncheckedCreateWithoutUserInput>;
};
export type BiltyCounterUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.BiltyCounterUpdateWithoutUserInput, Prisma.BiltyCounterUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BiltyCounterCreateWithoutUserInput, Prisma.BiltyCounterUncheckedCreateWithoutUserInput>;
    where?: Prisma.BiltyCounterWhereInput;
};
export type BiltyCounterUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.BiltyCounterWhereInput;
    data: Prisma.XOR<Prisma.BiltyCounterUpdateWithoutUserInput, Prisma.BiltyCounterUncheckedUpdateWithoutUserInput>;
};
export type BiltyCounterUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lastBiltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BiltyCounterUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lastBiltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BiltyCounterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    lastBiltyNumber?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["biltyCounter"]>;
export type BiltyCounterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    lastBiltyNumber?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["biltyCounter"]>;
export type BiltyCounterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    lastBiltyNumber?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["biltyCounter"]>;
export type BiltyCounterSelectScalar = {
    id?: boolean;
    userId?: boolean;
    lastBiltyNumber?: boolean;
};
export type BiltyCounterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "lastBiltyNumber", ExtArgs["result"]["biltyCounter"]>;
export type BiltyCounterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BiltyCounterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BiltyCounterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BiltyCounterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BiltyCounter";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        lastBiltyNumber: number;
    }, ExtArgs["result"]["biltyCounter"]>;
    composites: {};
};
export type BiltyCounterGetPayload<S extends boolean | null | undefined | BiltyCounterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BiltyCounterPayload, S>;
export type BiltyCounterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BiltyCounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BiltyCounterCountAggregateInputType | true;
};
export interface BiltyCounterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BiltyCounter'];
        meta: {
            name: 'BiltyCounter';
        };
    };
    /**
     * Find zero or one BiltyCounter that matches the filter.
     * @param {BiltyCounterFindUniqueArgs} args - Arguments to find a BiltyCounter
     * @example
     * // Get one BiltyCounter
     * const biltyCounter = await prisma.biltyCounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BiltyCounterFindUniqueArgs>(args: Prisma.SelectSubset<T, BiltyCounterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BiltyCounterClient<runtime.Types.Result.GetResult<Prisma.$BiltyCounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BiltyCounter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BiltyCounterFindUniqueOrThrowArgs} args - Arguments to find a BiltyCounter
     * @example
     * // Get one BiltyCounter
     * const biltyCounter = await prisma.biltyCounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BiltyCounterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BiltyCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BiltyCounterClient<runtime.Types.Result.GetResult<Prisma.$BiltyCounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BiltyCounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyCounterFindFirstArgs} args - Arguments to find a BiltyCounter
     * @example
     * // Get one BiltyCounter
     * const biltyCounter = await prisma.biltyCounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BiltyCounterFindFirstArgs>(args?: Prisma.SelectSubset<T, BiltyCounterFindFirstArgs<ExtArgs>>): Prisma.Prisma__BiltyCounterClient<runtime.Types.Result.GetResult<Prisma.$BiltyCounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BiltyCounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyCounterFindFirstOrThrowArgs} args - Arguments to find a BiltyCounter
     * @example
     * // Get one BiltyCounter
     * const biltyCounter = await prisma.biltyCounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BiltyCounterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BiltyCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BiltyCounterClient<runtime.Types.Result.GetResult<Prisma.$BiltyCounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BiltyCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyCounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BiltyCounters
     * const biltyCounters = await prisma.biltyCounter.findMany()
     *
     * // Get first 10 BiltyCounters
     * const biltyCounters = await prisma.biltyCounter.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const biltyCounterWithIdOnly = await prisma.biltyCounter.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BiltyCounterFindManyArgs>(args?: Prisma.SelectSubset<T, BiltyCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BiltyCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BiltyCounter.
     * @param {BiltyCounterCreateArgs} args - Arguments to create a BiltyCounter.
     * @example
     * // Create one BiltyCounter
     * const BiltyCounter = await prisma.biltyCounter.create({
     *   data: {
     *     // ... data to create a BiltyCounter
     *   }
     * })
     *
     */
    create<T extends BiltyCounterCreateArgs>(args: Prisma.SelectSubset<T, BiltyCounterCreateArgs<ExtArgs>>): Prisma.Prisma__BiltyCounterClient<runtime.Types.Result.GetResult<Prisma.$BiltyCounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BiltyCounters.
     * @param {BiltyCounterCreateManyArgs} args - Arguments to create many BiltyCounters.
     * @example
     * // Create many BiltyCounters
     * const biltyCounter = await prisma.biltyCounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BiltyCounterCreateManyArgs>(args?: Prisma.SelectSubset<T, BiltyCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BiltyCounters and returns the data saved in the database.
     * @param {BiltyCounterCreateManyAndReturnArgs} args - Arguments to create many BiltyCounters.
     * @example
     * // Create many BiltyCounters
     * const biltyCounter = await prisma.biltyCounter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BiltyCounters and only return the `id`
     * const biltyCounterWithIdOnly = await prisma.biltyCounter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BiltyCounterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BiltyCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BiltyCounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BiltyCounter.
     * @param {BiltyCounterDeleteArgs} args - Arguments to delete one BiltyCounter.
     * @example
     * // Delete one BiltyCounter
     * const BiltyCounter = await prisma.biltyCounter.delete({
     *   where: {
     *     // ... filter to delete one BiltyCounter
     *   }
     * })
     *
     */
    delete<T extends BiltyCounterDeleteArgs>(args: Prisma.SelectSubset<T, BiltyCounterDeleteArgs<ExtArgs>>): Prisma.Prisma__BiltyCounterClient<runtime.Types.Result.GetResult<Prisma.$BiltyCounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BiltyCounter.
     * @param {BiltyCounterUpdateArgs} args - Arguments to update one BiltyCounter.
     * @example
     * // Update one BiltyCounter
     * const biltyCounter = await prisma.biltyCounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BiltyCounterUpdateArgs>(args: Prisma.SelectSubset<T, BiltyCounterUpdateArgs<ExtArgs>>): Prisma.Prisma__BiltyCounterClient<runtime.Types.Result.GetResult<Prisma.$BiltyCounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BiltyCounters.
     * @param {BiltyCounterDeleteManyArgs} args - Arguments to filter BiltyCounters to delete.
     * @example
     * // Delete a few BiltyCounters
     * const { count } = await prisma.biltyCounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BiltyCounterDeleteManyArgs>(args?: Prisma.SelectSubset<T, BiltyCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BiltyCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyCounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BiltyCounters
     * const biltyCounter = await prisma.biltyCounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BiltyCounterUpdateManyArgs>(args: Prisma.SelectSubset<T, BiltyCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BiltyCounters and returns the data updated in the database.
     * @param {BiltyCounterUpdateManyAndReturnArgs} args - Arguments to update many BiltyCounters.
     * @example
     * // Update many BiltyCounters
     * const biltyCounter = await prisma.biltyCounter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BiltyCounters and only return the `id`
     * const biltyCounterWithIdOnly = await prisma.biltyCounter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BiltyCounterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BiltyCounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BiltyCounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BiltyCounter.
     * @param {BiltyCounterUpsertArgs} args - Arguments to update or create a BiltyCounter.
     * @example
     * // Update or create a BiltyCounter
     * const biltyCounter = await prisma.biltyCounter.upsert({
     *   create: {
     *     // ... data to create a BiltyCounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BiltyCounter we want to update
     *   }
     * })
     */
    upsert<T extends BiltyCounterUpsertArgs>(args: Prisma.SelectSubset<T, BiltyCounterUpsertArgs<ExtArgs>>): Prisma.Prisma__BiltyCounterClient<runtime.Types.Result.GetResult<Prisma.$BiltyCounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BiltyCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyCounterCountArgs} args - Arguments to filter BiltyCounters to count.
     * @example
     * // Count the number of BiltyCounters
     * const count = await prisma.biltyCounter.count({
     *   where: {
     *     // ... the filter for the BiltyCounters we want to count
     *   }
     * })
    **/
    count<T extends BiltyCounterCountArgs>(args?: Prisma.Subset<T, BiltyCounterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BiltyCounterCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BiltyCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyCounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BiltyCounterAggregateArgs>(args: Prisma.Subset<T, BiltyCounterAggregateArgs>): Prisma.PrismaPromise<GetBiltyCounterAggregateType<T>>;
    /**
     * Group by BiltyCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyCounterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends BiltyCounterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BiltyCounterGroupByArgs['orderBy'];
    } : {
        orderBy?: BiltyCounterGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BiltyCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBiltyCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BiltyCounter model
     */
    readonly fields: BiltyCounterFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BiltyCounter.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BiltyCounterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the BiltyCounter model
 */
export interface BiltyCounterFieldRefs {
    readonly id: Prisma.FieldRef<"BiltyCounter", 'Int'>;
    readonly userId: Prisma.FieldRef<"BiltyCounter", 'Int'>;
    readonly lastBiltyNumber: Prisma.FieldRef<"BiltyCounter", 'Int'>;
}
/**
 * BiltyCounter findUnique
 */
export type BiltyCounterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiltyCounter
     */
    select?: Prisma.BiltyCounterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BiltyCounter
     */
    omit?: Prisma.BiltyCounterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyCounterInclude<ExtArgs> | null;
    /**
     * Filter, which BiltyCounter to fetch.
     */
    where: Prisma.BiltyCounterWhereUniqueInput;
};
/**
 * BiltyCounter findUniqueOrThrow
 */
export type BiltyCounterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiltyCounter
     */
    select?: Prisma.BiltyCounterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BiltyCounter
     */
    omit?: Prisma.BiltyCounterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyCounterInclude<ExtArgs> | null;
    /**
     * Filter, which BiltyCounter to fetch.
     */
    where: Prisma.BiltyCounterWhereUniqueInput;
};
/**
 * BiltyCounter findFirst
 */
export type BiltyCounterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiltyCounter
     */
    select?: Prisma.BiltyCounterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BiltyCounter
     */
    omit?: Prisma.BiltyCounterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyCounterInclude<ExtArgs> | null;
    /**
     * Filter, which BiltyCounter to fetch.
     */
    where?: Prisma.BiltyCounterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BiltyCounters to fetch.
     */
    orderBy?: Prisma.BiltyCounterOrderByWithRelationInput | Prisma.BiltyCounterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BiltyCounters.
     */
    cursor?: Prisma.BiltyCounterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BiltyCounters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BiltyCounters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BiltyCounters.
     */
    distinct?: Prisma.BiltyCounterScalarFieldEnum | Prisma.BiltyCounterScalarFieldEnum[];
};
/**
 * BiltyCounter findFirstOrThrow
 */
export type BiltyCounterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiltyCounter
     */
    select?: Prisma.BiltyCounterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BiltyCounter
     */
    omit?: Prisma.BiltyCounterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyCounterInclude<ExtArgs> | null;
    /**
     * Filter, which BiltyCounter to fetch.
     */
    where?: Prisma.BiltyCounterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BiltyCounters to fetch.
     */
    orderBy?: Prisma.BiltyCounterOrderByWithRelationInput | Prisma.BiltyCounterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BiltyCounters.
     */
    cursor?: Prisma.BiltyCounterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BiltyCounters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BiltyCounters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BiltyCounters.
     */
    distinct?: Prisma.BiltyCounterScalarFieldEnum | Prisma.BiltyCounterScalarFieldEnum[];
};
/**
 * BiltyCounter findMany
 */
export type BiltyCounterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiltyCounter
     */
    select?: Prisma.BiltyCounterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BiltyCounter
     */
    omit?: Prisma.BiltyCounterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyCounterInclude<ExtArgs> | null;
    /**
     * Filter, which BiltyCounters to fetch.
     */
    where?: Prisma.BiltyCounterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BiltyCounters to fetch.
     */
    orderBy?: Prisma.BiltyCounterOrderByWithRelationInput | Prisma.BiltyCounterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BiltyCounters.
     */
    cursor?: Prisma.BiltyCounterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BiltyCounters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BiltyCounters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BiltyCounters.
     */
    distinct?: Prisma.BiltyCounterScalarFieldEnum | Prisma.BiltyCounterScalarFieldEnum[];
};
/**
 * BiltyCounter create
 */
export type BiltyCounterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiltyCounter
     */
    select?: Prisma.BiltyCounterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BiltyCounter
     */
    omit?: Prisma.BiltyCounterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyCounterInclude<ExtArgs> | null;
    /**
     * The data needed to create a BiltyCounter.
     */
    data: Prisma.XOR<Prisma.BiltyCounterCreateInput, Prisma.BiltyCounterUncheckedCreateInput>;
};
/**
 * BiltyCounter createMany
 */
export type BiltyCounterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BiltyCounters.
     */
    data: Prisma.BiltyCounterCreateManyInput | Prisma.BiltyCounterCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BiltyCounter createManyAndReturn
 */
export type BiltyCounterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiltyCounter
     */
    select?: Prisma.BiltyCounterSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BiltyCounter
     */
    omit?: Prisma.BiltyCounterOmit<ExtArgs> | null;
    /**
     * The data used to create many BiltyCounters.
     */
    data: Prisma.BiltyCounterCreateManyInput | Prisma.BiltyCounterCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyCounterIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BiltyCounter update
 */
export type BiltyCounterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiltyCounter
     */
    select?: Prisma.BiltyCounterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BiltyCounter
     */
    omit?: Prisma.BiltyCounterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyCounterInclude<ExtArgs> | null;
    /**
     * The data needed to update a BiltyCounter.
     */
    data: Prisma.XOR<Prisma.BiltyCounterUpdateInput, Prisma.BiltyCounterUncheckedUpdateInput>;
    /**
     * Choose, which BiltyCounter to update.
     */
    where: Prisma.BiltyCounterWhereUniqueInput;
};
/**
 * BiltyCounter updateMany
 */
export type BiltyCounterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BiltyCounters.
     */
    data: Prisma.XOR<Prisma.BiltyCounterUpdateManyMutationInput, Prisma.BiltyCounterUncheckedUpdateManyInput>;
    /**
     * Filter which BiltyCounters to update
     */
    where?: Prisma.BiltyCounterWhereInput;
    /**
     * Limit how many BiltyCounters to update.
     */
    limit?: number;
};
/**
 * BiltyCounter updateManyAndReturn
 */
export type BiltyCounterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiltyCounter
     */
    select?: Prisma.BiltyCounterSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BiltyCounter
     */
    omit?: Prisma.BiltyCounterOmit<ExtArgs> | null;
    /**
     * The data used to update BiltyCounters.
     */
    data: Prisma.XOR<Prisma.BiltyCounterUpdateManyMutationInput, Prisma.BiltyCounterUncheckedUpdateManyInput>;
    /**
     * Filter which BiltyCounters to update
     */
    where?: Prisma.BiltyCounterWhereInput;
    /**
     * Limit how many BiltyCounters to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyCounterIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BiltyCounter upsert
 */
export type BiltyCounterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiltyCounter
     */
    select?: Prisma.BiltyCounterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BiltyCounter
     */
    omit?: Prisma.BiltyCounterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyCounterInclude<ExtArgs> | null;
    /**
     * The filter to search for the BiltyCounter to update in case it exists.
     */
    where: Prisma.BiltyCounterWhereUniqueInput;
    /**
     * In case the BiltyCounter found by the `where` argument doesn't exist, create a new BiltyCounter with this data.
     */
    create: Prisma.XOR<Prisma.BiltyCounterCreateInput, Prisma.BiltyCounterUncheckedCreateInput>;
    /**
     * In case the BiltyCounter was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BiltyCounterUpdateInput, Prisma.BiltyCounterUncheckedUpdateInput>;
};
/**
 * BiltyCounter delete
 */
export type BiltyCounterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiltyCounter
     */
    select?: Prisma.BiltyCounterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BiltyCounter
     */
    omit?: Prisma.BiltyCounterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyCounterInclude<ExtArgs> | null;
    /**
     * Filter which BiltyCounter to delete.
     */
    where: Prisma.BiltyCounterWhereUniqueInput;
};
/**
 * BiltyCounter deleteMany
 */
export type BiltyCounterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BiltyCounters to delete
     */
    where?: Prisma.BiltyCounterWhereInput;
    /**
     * Limit how many BiltyCounters to delete.
     */
    limit?: number;
};
/**
 * BiltyCounter without action
 */
export type BiltyCounterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiltyCounter
     */
    select?: Prisma.BiltyCounterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BiltyCounter
     */
    omit?: Prisma.BiltyCounterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyCounterInclude<ExtArgs> | null;
};
//# sourceMappingURL=BiltyCounter.d.ts.map