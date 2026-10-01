import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Bilty
 *
 */
export type BiltyModel = runtime.Types.Result.DefaultSelection<Prisma.$BiltyPayload>;
export type AggregateBilty = {
    _count: BiltyCountAggregateOutputType | null;
    _avg: BiltyAvgAggregateOutputType | null;
    _sum: BiltySumAggregateOutputType | null;
    _min: BiltyMinAggregateOutputType | null;
    _max: BiltyMaxAggregateOutputType | null;
};
export type BiltyAvgAggregateOutputType = {
    id: number | null;
    biltyNumber: number | null;
    quantity: number | null;
    weight: runtime.Decimal | null;
    freight: runtime.Decimal | null;
    userId: number | null;
};
export type BiltySumAggregateOutputType = {
    id: number | null;
    biltyNumber: number | null;
    quantity: number | null;
    weight: runtime.Decimal | null;
    freight: runtime.Decimal | null;
    userId: number | null;
};
export type BiltyMinAggregateOutputType = {
    id: number | null;
    biltyNumber: number | null;
    consignorName: string | null;
    consignorGST: string | null;
    consigneeName: string | null;
    consigneeGST: string | null;
    vehicleNumber: string | null;
    driverName: string | null;
    driverPhone: string | null;
    goodsDescription: string | null;
    quantity: number | null;
    weight: runtime.Decimal | null;
    freight: runtime.Decimal | null;
    status: string | null;
    createdAt: Date | null;
    userId: number | null;
};
export type BiltyMaxAggregateOutputType = {
    id: number | null;
    biltyNumber: number | null;
    consignorName: string | null;
    consignorGST: string | null;
    consigneeName: string | null;
    consigneeGST: string | null;
    vehicleNumber: string | null;
    driverName: string | null;
    driverPhone: string | null;
    goodsDescription: string | null;
    quantity: number | null;
    weight: runtime.Decimal | null;
    freight: runtime.Decimal | null;
    status: string | null;
    createdAt: Date | null;
    userId: number | null;
};
export type BiltyCountAggregateOutputType = {
    id: number;
    biltyNumber: number;
    consignorName: number;
    consignorGST: number;
    consigneeName: number;
    consigneeGST: number;
    vehicleNumber: number;
    driverName: number;
    driverPhone: number;
    goodsDescription: number;
    quantity: number;
    weight: number;
    freight: number;
    status: number;
    createdAt: number;
    userId: number;
    _all: number;
};
export type BiltyAvgAggregateInputType = {
    id?: true;
    biltyNumber?: true;
    quantity?: true;
    weight?: true;
    freight?: true;
    userId?: true;
};
export type BiltySumAggregateInputType = {
    id?: true;
    biltyNumber?: true;
    quantity?: true;
    weight?: true;
    freight?: true;
    userId?: true;
};
export type BiltyMinAggregateInputType = {
    id?: true;
    biltyNumber?: true;
    consignorName?: true;
    consignorGST?: true;
    consigneeName?: true;
    consigneeGST?: true;
    vehicleNumber?: true;
    driverName?: true;
    driverPhone?: true;
    goodsDescription?: true;
    quantity?: true;
    weight?: true;
    freight?: true;
    status?: true;
    createdAt?: true;
    userId?: true;
};
export type BiltyMaxAggregateInputType = {
    id?: true;
    biltyNumber?: true;
    consignorName?: true;
    consignorGST?: true;
    consigneeName?: true;
    consigneeGST?: true;
    vehicleNumber?: true;
    driverName?: true;
    driverPhone?: true;
    goodsDescription?: true;
    quantity?: true;
    weight?: true;
    freight?: true;
    status?: true;
    createdAt?: true;
    userId?: true;
};
export type BiltyCountAggregateInputType = {
    id?: true;
    biltyNumber?: true;
    consignorName?: true;
    consignorGST?: true;
    consigneeName?: true;
    consigneeGST?: true;
    vehicleNumber?: true;
    driverName?: true;
    driverPhone?: true;
    goodsDescription?: true;
    quantity?: true;
    weight?: true;
    freight?: true;
    status?: true;
    createdAt?: true;
    userId?: true;
    _all?: true;
};
export type BiltyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Bilty to aggregate.
     */
    where?: Prisma.BiltyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bilties to fetch.
     */
    orderBy?: Prisma.BiltyOrderByWithRelationInput | Prisma.BiltyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BiltyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bilties from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bilties.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Bilties
    **/
    _count?: true | BiltyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BiltyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BiltySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BiltyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BiltyMaxAggregateInputType;
};
export type GetBiltyAggregateType<T extends BiltyAggregateArgs> = {
    [P in keyof T & keyof AggregateBilty]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBilty[P]> : Prisma.GetScalarType<T[P], AggregateBilty[P]>;
};
export type BiltyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BiltyWhereInput;
    orderBy?: Prisma.BiltyOrderByWithAggregationInput | Prisma.BiltyOrderByWithAggregationInput[];
    by: Prisma.BiltyScalarFieldEnum[] | Prisma.BiltyScalarFieldEnum;
    having?: Prisma.BiltyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BiltyCountAggregateInputType | true;
    _avg?: BiltyAvgAggregateInputType;
    _sum?: BiltySumAggregateInputType;
    _min?: BiltyMinAggregateInputType;
    _max?: BiltyMaxAggregateInputType;
};
export type BiltyGroupByOutputType = {
    id: number;
    biltyNumber: number;
    consignorName: string;
    consignorGST: string | null;
    consigneeName: string;
    consigneeGST: string | null;
    vehicleNumber: string;
    driverName: string;
    driverPhone: string;
    goodsDescription: string;
    quantity: number;
    weight: runtime.Decimal;
    freight: runtime.Decimal;
    status: string;
    createdAt: Date;
    userId: number;
    _count: BiltyCountAggregateOutputType | null;
    _avg: BiltyAvgAggregateOutputType | null;
    _sum: BiltySumAggregateOutputType | null;
    _min: BiltyMinAggregateOutputType | null;
    _max: BiltyMaxAggregateOutputType | null;
};
export type GetBiltyGroupByPayload<T extends BiltyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BiltyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BiltyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BiltyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BiltyGroupByOutputType[P]>;
}>>;
export type BiltyWhereInput = {
    AND?: Prisma.BiltyWhereInput | Prisma.BiltyWhereInput[];
    OR?: Prisma.BiltyWhereInput[];
    NOT?: Prisma.BiltyWhereInput | Prisma.BiltyWhereInput[];
    id?: Prisma.IntFilter<"Bilty"> | number;
    biltyNumber?: Prisma.IntFilter<"Bilty"> | number;
    consignorName?: Prisma.StringFilter<"Bilty"> | string;
    consignorGST?: Prisma.StringNullableFilter<"Bilty"> | string | null;
    consigneeName?: Prisma.StringFilter<"Bilty"> | string;
    consigneeGST?: Prisma.StringNullableFilter<"Bilty"> | string | null;
    vehicleNumber?: Prisma.StringFilter<"Bilty"> | string;
    driverName?: Prisma.StringFilter<"Bilty"> | string;
    driverPhone?: Prisma.StringFilter<"Bilty"> | string;
    goodsDescription?: Prisma.StringFilter<"Bilty"> | string;
    quantity?: Prisma.IntFilter<"Bilty"> | number;
    weight?: Prisma.DecimalFilter<"Bilty"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight?: Prisma.DecimalFilter<"Bilty"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"Bilty"> | string;
    createdAt?: Prisma.DateTimeFilter<"Bilty"> | Date | string;
    userId?: Prisma.IntFilter<"Bilty"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BiltyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    biltyNumber?: Prisma.SortOrder;
    consignorName?: Prisma.SortOrder;
    consignorGST?: Prisma.SortOrderInput | Prisma.SortOrder;
    consigneeName?: Prisma.SortOrder;
    consigneeGST?: Prisma.SortOrderInput | Prisma.SortOrder;
    vehicleNumber?: Prisma.SortOrder;
    driverName?: Prisma.SortOrder;
    driverPhone?: Prisma.SortOrder;
    goodsDescription?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    freight?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type BiltyWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId_biltyNumber?: Prisma.BiltyUserIdBiltyNumberCompoundUniqueInput;
    AND?: Prisma.BiltyWhereInput | Prisma.BiltyWhereInput[];
    OR?: Prisma.BiltyWhereInput[];
    NOT?: Prisma.BiltyWhereInput | Prisma.BiltyWhereInput[];
    biltyNumber?: Prisma.IntFilter<"Bilty"> | number;
    consignorName?: Prisma.StringFilter<"Bilty"> | string;
    consignorGST?: Prisma.StringNullableFilter<"Bilty"> | string | null;
    consigneeName?: Prisma.StringFilter<"Bilty"> | string;
    consigneeGST?: Prisma.StringNullableFilter<"Bilty"> | string | null;
    vehicleNumber?: Prisma.StringFilter<"Bilty"> | string;
    driverName?: Prisma.StringFilter<"Bilty"> | string;
    driverPhone?: Prisma.StringFilter<"Bilty"> | string;
    goodsDescription?: Prisma.StringFilter<"Bilty"> | string;
    quantity?: Prisma.IntFilter<"Bilty"> | number;
    weight?: Prisma.DecimalFilter<"Bilty"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight?: Prisma.DecimalFilter<"Bilty"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"Bilty"> | string;
    createdAt?: Prisma.DateTimeFilter<"Bilty"> | Date | string;
    userId?: Prisma.IntFilter<"Bilty"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_biltyNumber">;
export type BiltyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    biltyNumber?: Prisma.SortOrder;
    consignorName?: Prisma.SortOrder;
    consignorGST?: Prisma.SortOrderInput | Prisma.SortOrder;
    consigneeName?: Prisma.SortOrder;
    consigneeGST?: Prisma.SortOrderInput | Prisma.SortOrder;
    vehicleNumber?: Prisma.SortOrder;
    driverName?: Prisma.SortOrder;
    driverPhone?: Prisma.SortOrder;
    goodsDescription?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    freight?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.BiltyCountOrderByAggregateInput;
    _avg?: Prisma.BiltyAvgOrderByAggregateInput;
    _max?: Prisma.BiltyMaxOrderByAggregateInput;
    _min?: Prisma.BiltyMinOrderByAggregateInput;
    _sum?: Prisma.BiltySumOrderByAggregateInput;
};
export type BiltyScalarWhereWithAggregatesInput = {
    AND?: Prisma.BiltyScalarWhereWithAggregatesInput | Prisma.BiltyScalarWhereWithAggregatesInput[];
    OR?: Prisma.BiltyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BiltyScalarWhereWithAggregatesInput | Prisma.BiltyScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Bilty"> | number;
    biltyNumber?: Prisma.IntWithAggregatesFilter<"Bilty"> | number;
    consignorName?: Prisma.StringWithAggregatesFilter<"Bilty"> | string;
    consignorGST?: Prisma.StringNullableWithAggregatesFilter<"Bilty"> | string | null;
    consigneeName?: Prisma.StringWithAggregatesFilter<"Bilty"> | string;
    consigneeGST?: Prisma.StringNullableWithAggregatesFilter<"Bilty"> | string | null;
    vehicleNumber?: Prisma.StringWithAggregatesFilter<"Bilty"> | string;
    driverName?: Prisma.StringWithAggregatesFilter<"Bilty"> | string;
    driverPhone?: Prisma.StringWithAggregatesFilter<"Bilty"> | string;
    goodsDescription?: Prisma.StringWithAggregatesFilter<"Bilty"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"Bilty"> | number;
    weight?: Prisma.DecimalWithAggregatesFilter<"Bilty"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight?: Prisma.DecimalWithAggregatesFilter<"Bilty"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringWithAggregatesFilter<"Bilty"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Bilty"> | Date | string;
    userId?: Prisma.IntWithAggregatesFilter<"Bilty"> | number;
};
export type BiltyCreateInput = {
    biltyNumber: number;
    consignorName: string;
    consignorGST?: string | null;
    consigneeName: string;
    consigneeGST?: string | null;
    vehicleNumber: string;
    driverName: string;
    driverPhone: string;
    goodsDescription: string;
    quantity: number;
    weight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBiltiesInput;
};
export type BiltyUncheckedCreateInput = {
    id?: number;
    biltyNumber: number;
    consignorName: string;
    consignorGST?: string | null;
    consigneeName: string;
    consigneeGST?: string | null;
    vehicleNumber: string;
    driverName: string;
    driverPhone: string;
    goodsDescription: string;
    quantity: number;
    weight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    createdAt?: Date | string;
    userId: number;
};
export type BiltyUpdateInput = {
    biltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    consignorName?: Prisma.StringFieldUpdateOperationsInput | string;
    consignorGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consigneeName?: Prisma.StringFieldUpdateOperationsInput | string;
    consigneeGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    driverName?: Prisma.StringFieldUpdateOperationsInput | string;
    driverPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    goodsDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBiltiesNestedInput;
};
export type BiltyUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    biltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    consignorName?: Prisma.StringFieldUpdateOperationsInput | string;
    consignorGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consigneeName?: Prisma.StringFieldUpdateOperationsInput | string;
    consigneeGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    driverName?: Prisma.StringFieldUpdateOperationsInput | string;
    driverPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    goodsDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BiltyCreateManyInput = {
    id?: number;
    biltyNumber: number;
    consignorName: string;
    consignorGST?: string | null;
    consigneeName: string;
    consigneeGST?: string | null;
    vehicleNumber: string;
    driverName: string;
    driverPhone: string;
    goodsDescription: string;
    quantity: number;
    weight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    createdAt?: Date | string;
    userId: number;
};
export type BiltyUpdateManyMutationInput = {
    biltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    consignorName?: Prisma.StringFieldUpdateOperationsInput | string;
    consignorGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consigneeName?: Prisma.StringFieldUpdateOperationsInput | string;
    consigneeGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    driverName?: Prisma.StringFieldUpdateOperationsInput | string;
    driverPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    goodsDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BiltyUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    biltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    consignorName?: Prisma.StringFieldUpdateOperationsInput | string;
    consignorGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consigneeName?: Prisma.StringFieldUpdateOperationsInput | string;
    consigneeGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    driverName?: Prisma.StringFieldUpdateOperationsInput | string;
    driverPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    goodsDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BiltyListRelationFilter = {
    every?: Prisma.BiltyWhereInput;
    some?: Prisma.BiltyWhereInput;
    none?: Prisma.BiltyWhereInput;
};
export type BiltyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BiltyUserIdBiltyNumberCompoundUniqueInput = {
    userId: number;
    biltyNumber: number;
};
export type BiltyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    biltyNumber?: Prisma.SortOrder;
    consignorName?: Prisma.SortOrder;
    consignorGST?: Prisma.SortOrder;
    consigneeName?: Prisma.SortOrder;
    consigneeGST?: Prisma.SortOrder;
    vehicleNumber?: Prisma.SortOrder;
    driverName?: Prisma.SortOrder;
    driverPhone?: Prisma.SortOrder;
    goodsDescription?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    freight?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BiltyAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    biltyNumber?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    freight?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BiltyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    biltyNumber?: Prisma.SortOrder;
    consignorName?: Prisma.SortOrder;
    consignorGST?: Prisma.SortOrder;
    consigneeName?: Prisma.SortOrder;
    consigneeGST?: Prisma.SortOrder;
    vehicleNumber?: Prisma.SortOrder;
    driverName?: Prisma.SortOrder;
    driverPhone?: Prisma.SortOrder;
    goodsDescription?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    freight?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BiltyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    biltyNumber?: Prisma.SortOrder;
    consignorName?: Prisma.SortOrder;
    consignorGST?: Prisma.SortOrder;
    consigneeName?: Prisma.SortOrder;
    consigneeGST?: Prisma.SortOrder;
    vehicleNumber?: Prisma.SortOrder;
    driverName?: Prisma.SortOrder;
    driverPhone?: Prisma.SortOrder;
    goodsDescription?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    freight?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BiltySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    biltyNumber?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    freight?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BiltyCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BiltyCreateWithoutUserInput, Prisma.BiltyUncheckedCreateWithoutUserInput> | Prisma.BiltyCreateWithoutUserInput[] | Prisma.BiltyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BiltyCreateOrConnectWithoutUserInput | Prisma.BiltyCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BiltyCreateManyUserInputEnvelope;
    connect?: Prisma.BiltyWhereUniqueInput | Prisma.BiltyWhereUniqueInput[];
};
export type BiltyUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BiltyCreateWithoutUserInput, Prisma.BiltyUncheckedCreateWithoutUserInput> | Prisma.BiltyCreateWithoutUserInput[] | Prisma.BiltyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BiltyCreateOrConnectWithoutUserInput | Prisma.BiltyCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BiltyCreateManyUserInputEnvelope;
    connect?: Prisma.BiltyWhereUniqueInput | Prisma.BiltyWhereUniqueInput[];
};
export type BiltyUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BiltyCreateWithoutUserInput, Prisma.BiltyUncheckedCreateWithoutUserInput> | Prisma.BiltyCreateWithoutUserInput[] | Prisma.BiltyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BiltyCreateOrConnectWithoutUserInput | Prisma.BiltyCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BiltyUpsertWithWhereUniqueWithoutUserInput | Prisma.BiltyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BiltyCreateManyUserInputEnvelope;
    set?: Prisma.BiltyWhereUniqueInput | Prisma.BiltyWhereUniqueInput[];
    disconnect?: Prisma.BiltyWhereUniqueInput | Prisma.BiltyWhereUniqueInput[];
    delete?: Prisma.BiltyWhereUniqueInput | Prisma.BiltyWhereUniqueInput[];
    connect?: Prisma.BiltyWhereUniqueInput | Prisma.BiltyWhereUniqueInput[];
    update?: Prisma.BiltyUpdateWithWhereUniqueWithoutUserInput | Prisma.BiltyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BiltyUpdateManyWithWhereWithoutUserInput | Prisma.BiltyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BiltyScalarWhereInput | Prisma.BiltyScalarWhereInput[];
};
export type BiltyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BiltyCreateWithoutUserInput, Prisma.BiltyUncheckedCreateWithoutUserInput> | Prisma.BiltyCreateWithoutUserInput[] | Prisma.BiltyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BiltyCreateOrConnectWithoutUserInput | Prisma.BiltyCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BiltyUpsertWithWhereUniqueWithoutUserInput | Prisma.BiltyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BiltyCreateManyUserInputEnvelope;
    set?: Prisma.BiltyWhereUniqueInput | Prisma.BiltyWhereUniqueInput[];
    disconnect?: Prisma.BiltyWhereUniqueInput | Prisma.BiltyWhereUniqueInput[];
    delete?: Prisma.BiltyWhereUniqueInput | Prisma.BiltyWhereUniqueInput[];
    connect?: Prisma.BiltyWhereUniqueInput | Prisma.BiltyWhereUniqueInput[];
    update?: Prisma.BiltyUpdateWithWhereUniqueWithoutUserInput | Prisma.BiltyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BiltyUpdateManyWithWhereWithoutUserInput | Prisma.BiltyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BiltyScalarWhereInput | Prisma.BiltyScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type BiltyCreateWithoutUserInput = {
    biltyNumber: number;
    consignorName: string;
    consignorGST?: string | null;
    consigneeName: string;
    consigneeGST?: string | null;
    vehicleNumber: string;
    driverName: string;
    driverPhone: string;
    goodsDescription: string;
    quantity: number;
    weight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    createdAt?: Date | string;
};
export type BiltyUncheckedCreateWithoutUserInput = {
    id?: number;
    biltyNumber: number;
    consignorName: string;
    consignorGST?: string | null;
    consigneeName: string;
    consigneeGST?: string | null;
    vehicleNumber: string;
    driverName: string;
    driverPhone: string;
    goodsDescription: string;
    quantity: number;
    weight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    createdAt?: Date | string;
};
export type BiltyCreateOrConnectWithoutUserInput = {
    where: Prisma.BiltyWhereUniqueInput;
    create: Prisma.XOR<Prisma.BiltyCreateWithoutUserInput, Prisma.BiltyUncheckedCreateWithoutUserInput>;
};
export type BiltyCreateManyUserInputEnvelope = {
    data: Prisma.BiltyCreateManyUserInput | Prisma.BiltyCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type BiltyUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BiltyWhereUniqueInput;
    update: Prisma.XOR<Prisma.BiltyUpdateWithoutUserInput, Prisma.BiltyUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BiltyCreateWithoutUserInput, Prisma.BiltyUncheckedCreateWithoutUserInput>;
};
export type BiltyUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BiltyWhereUniqueInput;
    data: Prisma.XOR<Prisma.BiltyUpdateWithoutUserInput, Prisma.BiltyUncheckedUpdateWithoutUserInput>;
};
export type BiltyUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BiltyScalarWhereInput;
    data: Prisma.XOR<Prisma.BiltyUpdateManyMutationInput, Prisma.BiltyUncheckedUpdateManyWithoutUserInput>;
};
export type BiltyScalarWhereInput = {
    AND?: Prisma.BiltyScalarWhereInput | Prisma.BiltyScalarWhereInput[];
    OR?: Prisma.BiltyScalarWhereInput[];
    NOT?: Prisma.BiltyScalarWhereInput | Prisma.BiltyScalarWhereInput[];
    id?: Prisma.IntFilter<"Bilty"> | number;
    biltyNumber?: Prisma.IntFilter<"Bilty"> | number;
    consignorName?: Prisma.StringFilter<"Bilty"> | string;
    consignorGST?: Prisma.StringNullableFilter<"Bilty"> | string | null;
    consigneeName?: Prisma.StringFilter<"Bilty"> | string;
    consigneeGST?: Prisma.StringNullableFilter<"Bilty"> | string | null;
    vehicleNumber?: Prisma.StringFilter<"Bilty"> | string;
    driverName?: Prisma.StringFilter<"Bilty"> | string;
    driverPhone?: Prisma.StringFilter<"Bilty"> | string;
    goodsDescription?: Prisma.StringFilter<"Bilty"> | string;
    quantity?: Prisma.IntFilter<"Bilty"> | number;
    weight?: Prisma.DecimalFilter<"Bilty"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight?: Prisma.DecimalFilter<"Bilty"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"Bilty"> | string;
    createdAt?: Prisma.DateTimeFilter<"Bilty"> | Date | string;
    userId?: Prisma.IntFilter<"Bilty"> | number;
};
export type BiltyCreateManyUserInput = {
    id?: number;
    biltyNumber: number;
    consignorName: string;
    consignorGST?: string | null;
    consigneeName: string;
    consigneeGST?: string | null;
    vehicleNumber: string;
    driverName: string;
    driverPhone: string;
    goodsDescription: string;
    quantity: number;
    weight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    createdAt?: Date | string;
};
export type BiltyUpdateWithoutUserInput = {
    biltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    consignorName?: Prisma.StringFieldUpdateOperationsInput | string;
    consignorGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consigneeName?: Prisma.StringFieldUpdateOperationsInput | string;
    consigneeGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    driverName?: Prisma.StringFieldUpdateOperationsInput | string;
    driverPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    goodsDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BiltyUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    biltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    consignorName?: Prisma.StringFieldUpdateOperationsInput | string;
    consignorGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consigneeName?: Prisma.StringFieldUpdateOperationsInput | string;
    consigneeGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    driverName?: Prisma.StringFieldUpdateOperationsInput | string;
    driverPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    goodsDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BiltyUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    biltyNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    consignorName?: Prisma.StringFieldUpdateOperationsInput | string;
    consignorGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    consigneeName?: Prisma.StringFieldUpdateOperationsInput | string;
    consigneeGST?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    driverName?: Prisma.StringFieldUpdateOperationsInput | string;
    driverPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    goodsDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    weight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BiltySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    biltyNumber?: boolean;
    consignorName?: boolean;
    consignorGST?: boolean;
    consigneeName?: boolean;
    consigneeGST?: boolean;
    vehicleNumber?: boolean;
    driverName?: boolean;
    driverPhone?: boolean;
    goodsDescription?: boolean;
    quantity?: boolean;
    weight?: boolean;
    freight?: boolean;
    status?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bilty"]>;
export type BiltySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    biltyNumber?: boolean;
    consignorName?: boolean;
    consignorGST?: boolean;
    consigneeName?: boolean;
    consigneeGST?: boolean;
    vehicleNumber?: boolean;
    driverName?: boolean;
    driverPhone?: boolean;
    goodsDescription?: boolean;
    quantity?: boolean;
    weight?: boolean;
    freight?: boolean;
    status?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bilty"]>;
export type BiltySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    biltyNumber?: boolean;
    consignorName?: boolean;
    consignorGST?: boolean;
    consigneeName?: boolean;
    consigneeGST?: boolean;
    vehicleNumber?: boolean;
    driverName?: boolean;
    driverPhone?: boolean;
    goodsDescription?: boolean;
    quantity?: boolean;
    weight?: boolean;
    freight?: boolean;
    status?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bilty"]>;
export type BiltySelectScalar = {
    id?: boolean;
    biltyNumber?: boolean;
    consignorName?: boolean;
    consignorGST?: boolean;
    consigneeName?: boolean;
    consigneeGST?: boolean;
    vehicleNumber?: boolean;
    driverName?: boolean;
    driverPhone?: boolean;
    goodsDescription?: boolean;
    quantity?: boolean;
    weight?: boolean;
    freight?: boolean;
    status?: boolean;
    createdAt?: boolean;
    userId?: boolean;
};
export type BiltyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "biltyNumber" | "consignorName" | "consignorGST" | "consigneeName" | "consigneeGST" | "vehicleNumber" | "driverName" | "driverPhone" | "goodsDescription" | "quantity" | "weight" | "freight" | "status" | "createdAt" | "userId", ExtArgs["result"]["bilty"]>;
export type BiltyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BiltyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BiltyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BiltyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Bilty";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        biltyNumber: number;
        consignorName: string;
        consignorGST: string | null;
        consigneeName: string;
        consigneeGST: string | null;
        vehicleNumber: string;
        driverName: string;
        driverPhone: string;
        goodsDescription: string;
        quantity: number;
        weight: runtime.Decimal;
        freight: runtime.Decimal;
        status: string;
        createdAt: Date;
        userId: number;
    }, ExtArgs["result"]["bilty"]>;
    composites: {};
};
export type BiltyGetPayload<S extends boolean | null | undefined | BiltyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BiltyPayload, S>;
export type BiltyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BiltyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BiltyCountAggregateInputType | true;
};
export interface BiltyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Bilty'];
        meta: {
            name: 'Bilty';
        };
    };
    /**
     * Find zero or one Bilty that matches the filter.
     * @param {BiltyFindUniqueArgs} args - Arguments to find a Bilty
     * @example
     * // Get one Bilty
     * const bilty = await prisma.bilty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BiltyFindUniqueArgs>(args: Prisma.SelectSubset<T, BiltyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BiltyClient<runtime.Types.Result.GetResult<Prisma.$BiltyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Bilty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BiltyFindUniqueOrThrowArgs} args - Arguments to find a Bilty
     * @example
     * // Get one Bilty
     * const bilty = await prisma.bilty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BiltyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BiltyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BiltyClient<runtime.Types.Result.GetResult<Prisma.$BiltyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Bilty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyFindFirstArgs} args - Arguments to find a Bilty
     * @example
     * // Get one Bilty
     * const bilty = await prisma.bilty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BiltyFindFirstArgs>(args?: Prisma.SelectSubset<T, BiltyFindFirstArgs<ExtArgs>>): Prisma.Prisma__BiltyClient<runtime.Types.Result.GetResult<Prisma.$BiltyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Bilty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyFindFirstOrThrowArgs} args - Arguments to find a Bilty
     * @example
     * // Get one Bilty
     * const bilty = await prisma.bilty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BiltyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BiltyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BiltyClient<runtime.Types.Result.GetResult<Prisma.$BiltyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Bilties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bilties
     * const bilties = await prisma.bilty.findMany()
     *
     * // Get first 10 Bilties
     * const bilties = await prisma.bilty.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const biltyWithIdOnly = await prisma.bilty.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BiltyFindManyArgs>(args?: Prisma.SelectSubset<T, BiltyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BiltyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Bilty.
     * @param {BiltyCreateArgs} args - Arguments to create a Bilty.
     * @example
     * // Create one Bilty
     * const Bilty = await prisma.bilty.create({
     *   data: {
     *     // ... data to create a Bilty
     *   }
     * })
     *
     */
    create<T extends BiltyCreateArgs>(args: Prisma.SelectSubset<T, BiltyCreateArgs<ExtArgs>>): Prisma.Prisma__BiltyClient<runtime.Types.Result.GetResult<Prisma.$BiltyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Bilties.
     * @param {BiltyCreateManyArgs} args - Arguments to create many Bilties.
     * @example
     * // Create many Bilties
     * const bilty = await prisma.bilty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BiltyCreateManyArgs>(args?: Prisma.SelectSubset<T, BiltyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Bilties and returns the data saved in the database.
     * @param {BiltyCreateManyAndReturnArgs} args - Arguments to create many Bilties.
     * @example
     * // Create many Bilties
     * const bilty = await prisma.bilty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Bilties and only return the `id`
     * const biltyWithIdOnly = await prisma.bilty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BiltyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BiltyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BiltyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Bilty.
     * @param {BiltyDeleteArgs} args - Arguments to delete one Bilty.
     * @example
     * // Delete one Bilty
     * const Bilty = await prisma.bilty.delete({
     *   where: {
     *     // ... filter to delete one Bilty
     *   }
     * })
     *
     */
    delete<T extends BiltyDeleteArgs>(args: Prisma.SelectSubset<T, BiltyDeleteArgs<ExtArgs>>): Prisma.Prisma__BiltyClient<runtime.Types.Result.GetResult<Prisma.$BiltyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Bilty.
     * @param {BiltyUpdateArgs} args - Arguments to update one Bilty.
     * @example
     * // Update one Bilty
     * const bilty = await prisma.bilty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BiltyUpdateArgs>(args: Prisma.SelectSubset<T, BiltyUpdateArgs<ExtArgs>>): Prisma.Prisma__BiltyClient<runtime.Types.Result.GetResult<Prisma.$BiltyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Bilties.
     * @param {BiltyDeleteManyArgs} args - Arguments to filter Bilties to delete.
     * @example
     * // Delete a few Bilties
     * const { count } = await prisma.bilty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BiltyDeleteManyArgs>(args?: Prisma.SelectSubset<T, BiltyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Bilties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bilties
     * const bilty = await prisma.bilty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BiltyUpdateManyArgs>(args: Prisma.SelectSubset<T, BiltyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Bilties and returns the data updated in the database.
     * @param {BiltyUpdateManyAndReturnArgs} args - Arguments to update many Bilties.
     * @example
     * // Update many Bilties
     * const bilty = await prisma.bilty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Bilties and only return the `id`
     * const biltyWithIdOnly = await prisma.bilty.updateManyAndReturn({
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
    updateManyAndReturn<T extends BiltyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BiltyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BiltyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Bilty.
     * @param {BiltyUpsertArgs} args - Arguments to update or create a Bilty.
     * @example
     * // Update or create a Bilty
     * const bilty = await prisma.bilty.upsert({
     *   create: {
     *     // ... data to create a Bilty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bilty we want to update
     *   }
     * })
     */
    upsert<T extends BiltyUpsertArgs>(args: Prisma.SelectSubset<T, BiltyUpsertArgs<ExtArgs>>): Prisma.Prisma__BiltyClient<runtime.Types.Result.GetResult<Prisma.$BiltyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Bilties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyCountArgs} args - Arguments to filter Bilties to count.
     * @example
     * // Count the number of Bilties
     * const count = await prisma.bilty.count({
     *   where: {
     *     // ... the filter for the Bilties we want to count
     *   }
     * })
    **/
    count<T extends BiltyCountArgs>(args?: Prisma.Subset<T, BiltyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BiltyCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Bilty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BiltyAggregateArgs>(args: Prisma.Subset<T, BiltyAggregateArgs>): Prisma.PrismaPromise<GetBiltyAggregateType<T>>;
    /**
     * Group by Bilty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiltyGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BiltyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BiltyGroupByArgs['orderBy'];
    } : {
        orderBy?: BiltyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BiltyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBiltyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Bilty model
     */
    readonly fields: BiltyFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Bilty.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BiltyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the Bilty model
 */
export interface BiltyFieldRefs {
    readonly id: Prisma.FieldRef<"Bilty", 'Int'>;
    readonly biltyNumber: Prisma.FieldRef<"Bilty", 'Int'>;
    readonly consignorName: Prisma.FieldRef<"Bilty", 'String'>;
    readonly consignorGST: Prisma.FieldRef<"Bilty", 'String'>;
    readonly consigneeName: Prisma.FieldRef<"Bilty", 'String'>;
    readonly consigneeGST: Prisma.FieldRef<"Bilty", 'String'>;
    readonly vehicleNumber: Prisma.FieldRef<"Bilty", 'String'>;
    readonly driverName: Prisma.FieldRef<"Bilty", 'String'>;
    readonly driverPhone: Prisma.FieldRef<"Bilty", 'String'>;
    readonly goodsDescription: Prisma.FieldRef<"Bilty", 'String'>;
    readonly quantity: Prisma.FieldRef<"Bilty", 'Int'>;
    readonly weight: Prisma.FieldRef<"Bilty", 'Decimal'>;
    readonly freight: Prisma.FieldRef<"Bilty", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Bilty", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Bilty", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"Bilty", 'Int'>;
}
/**
 * Bilty findUnique
 */
export type BiltyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilty
     */
    select?: Prisma.BiltySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bilty
     */
    omit?: Prisma.BiltyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyInclude<ExtArgs> | null;
    /**
     * Filter, which Bilty to fetch.
     */
    where: Prisma.BiltyWhereUniqueInput;
};
/**
 * Bilty findUniqueOrThrow
 */
export type BiltyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilty
     */
    select?: Prisma.BiltySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bilty
     */
    omit?: Prisma.BiltyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyInclude<ExtArgs> | null;
    /**
     * Filter, which Bilty to fetch.
     */
    where: Prisma.BiltyWhereUniqueInput;
};
/**
 * Bilty findFirst
 */
export type BiltyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilty
     */
    select?: Prisma.BiltySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bilty
     */
    omit?: Prisma.BiltyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyInclude<ExtArgs> | null;
    /**
     * Filter, which Bilty to fetch.
     */
    where?: Prisma.BiltyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bilties to fetch.
     */
    orderBy?: Prisma.BiltyOrderByWithRelationInput | Prisma.BiltyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bilties.
     */
    cursor?: Prisma.BiltyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bilties from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bilties.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bilties.
     */
    distinct?: Prisma.BiltyScalarFieldEnum | Prisma.BiltyScalarFieldEnum[];
};
/**
 * Bilty findFirstOrThrow
 */
export type BiltyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilty
     */
    select?: Prisma.BiltySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bilty
     */
    omit?: Prisma.BiltyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyInclude<ExtArgs> | null;
    /**
     * Filter, which Bilty to fetch.
     */
    where?: Prisma.BiltyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bilties to fetch.
     */
    orderBy?: Prisma.BiltyOrderByWithRelationInput | Prisma.BiltyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bilties.
     */
    cursor?: Prisma.BiltyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bilties from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bilties.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bilties.
     */
    distinct?: Prisma.BiltyScalarFieldEnum | Prisma.BiltyScalarFieldEnum[];
};
/**
 * Bilty findMany
 */
export type BiltyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilty
     */
    select?: Prisma.BiltySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bilty
     */
    omit?: Prisma.BiltyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyInclude<ExtArgs> | null;
    /**
     * Filter, which Bilties to fetch.
     */
    where?: Prisma.BiltyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bilties to fetch.
     */
    orderBy?: Prisma.BiltyOrderByWithRelationInput | Prisma.BiltyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Bilties.
     */
    cursor?: Prisma.BiltyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bilties from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bilties.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bilties.
     */
    distinct?: Prisma.BiltyScalarFieldEnum | Prisma.BiltyScalarFieldEnum[];
};
/**
 * Bilty create
 */
export type BiltyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilty
     */
    select?: Prisma.BiltySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bilty
     */
    omit?: Prisma.BiltyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyInclude<ExtArgs> | null;
    /**
     * The data needed to create a Bilty.
     */
    data: Prisma.XOR<Prisma.BiltyCreateInput, Prisma.BiltyUncheckedCreateInput>;
};
/**
 * Bilty createMany
 */
export type BiltyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bilties.
     */
    data: Prisma.BiltyCreateManyInput | Prisma.BiltyCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Bilty createManyAndReturn
 */
export type BiltyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilty
     */
    select?: Prisma.BiltySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Bilty
     */
    omit?: Prisma.BiltyOmit<ExtArgs> | null;
    /**
     * The data used to create many Bilties.
     */
    data: Prisma.BiltyCreateManyInput | Prisma.BiltyCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Bilty update
 */
export type BiltyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilty
     */
    select?: Prisma.BiltySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bilty
     */
    omit?: Prisma.BiltyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyInclude<ExtArgs> | null;
    /**
     * The data needed to update a Bilty.
     */
    data: Prisma.XOR<Prisma.BiltyUpdateInput, Prisma.BiltyUncheckedUpdateInput>;
    /**
     * Choose, which Bilty to update.
     */
    where: Prisma.BiltyWhereUniqueInput;
};
/**
 * Bilty updateMany
 */
export type BiltyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Bilties.
     */
    data: Prisma.XOR<Prisma.BiltyUpdateManyMutationInput, Prisma.BiltyUncheckedUpdateManyInput>;
    /**
     * Filter which Bilties to update
     */
    where?: Prisma.BiltyWhereInput;
    /**
     * Limit how many Bilties to update.
     */
    limit?: number;
};
/**
 * Bilty updateManyAndReturn
 */
export type BiltyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilty
     */
    select?: Prisma.BiltySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Bilty
     */
    omit?: Prisma.BiltyOmit<ExtArgs> | null;
    /**
     * The data used to update Bilties.
     */
    data: Prisma.XOR<Prisma.BiltyUpdateManyMutationInput, Prisma.BiltyUncheckedUpdateManyInput>;
    /**
     * Filter which Bilties to update
     */
    where?: Prisma.BiltyWhereInput;
    /**
     * Limit how many Bilties to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Bilty upsert
 */
export type BiltyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilty
     */
    select?: Prisma.BiltySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bilty
     */
    omit?: Prisma.BiltyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyInclude<ExtArgs> | null;
    /**
     * The filter to search for the Bilty to update in case it exists.
     */
    where: Prisma.BiltyWhereUniqueInput;
    /**
     * In case the Bilty found by the `where` argument doesn't exist, create a new Bilty with this data.
     */
    create: Prisma.XOR<Prisma.BiltyCreateInput, Prisma.BiltyUncheckedCreateInput>;
    /**
     * In case the Bilty was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BiltyUpdateInput, Prisma.BiltyUncheckedUpdateInput>;
};
/**
 * Bilty delete
 */
export type BiltyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilty
     */
    select?: Prisma.BiltySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bilty
     */
    omit?: Prisma.BiltyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyInclude<ExtArgs> | null;
    /**
     * Filter which Bilty to delete.
     */
    where: Prisma.BiltyWhereUniqueInput;
};
/**
 * Bilty deleteMany
 */
export type BiltyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Bilties to delete
     */
    where?: Prisma.BiltyWhereInput;
    /**
     * Limit how many Bilties to delete.
     */
    limit?: number;
};
/**
 * Bilty without action
 */
export type BiltyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilty
     */
    select?: Prisma.BiltySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bilty
     */
    omit?: Prisma.BiltyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BiltyInclude<ExtArgs> | null;
};
//# sourceMappingURL=Bilty.d.ts.map