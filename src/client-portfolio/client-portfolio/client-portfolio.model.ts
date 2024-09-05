import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Tax {
  @Field()
  taxType: string;

  @Field()
  taxId: string;

  @Field()
  rate: number;
}

@ObjectType()
class Price {
  @Field()
  full_price: number;

  @Field(() => [Tax])
  taxes: Tax[];
}

@ObjectType()
class Item {
  @Field()
  sku: string;

  @Field()
  title: string;

  @Field()
  categoryId: string;

  @Field()
  category: string;

  @Field()
  brand: string;

  @Field()
  classification: string;

  @Field()
  unitsPerBox: string;

  @Field()
  minOrderUnits: string;

  @Field()
  packageDescription: string;

  @Field()
  packageUnitDescription: string;

  @Field()
  quantityMaxRedeem: number;

  @Field()
  redeemUnit: string;

  @Field()
  orderReasonRedeem: string;

  @Field()
  skuRedeem: boolean;

  @Field(() => Price)
  price: Price;

  @Field()
  points: number;
}

@ObjectType()
export class ClientPortfolio {
  @Field()
  customerCode: string;

  @Field()
  channel: string;

  @Field()
  createdDate: Date;

  @Field(() => [Item])
  items: Item[];

  @Field()
  route: string;
}
