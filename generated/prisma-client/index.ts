// Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  email: (where?: EmailWhereInput) => Promise<boolean>;
  phoneNumber: (where?: PhoneNumberWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  email: (where: EmailWhereUniqueInput) => EmailNullablePromise;
  emails: (args?: {
    where?: EmailWhereInput;
    orderBy?: EmailOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Email>;
  emailsConnection: (args?: {
    where?: EmailWhereInput;
    orderBy?: EmailOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => EmailConnectionPromise;
  phoneNumber: (
    where: PhoneNumberWhereUniqueInput
  ) => PhoneNumberNullablePromise;
  phoneNumbers: (args?: {
    where?: PhoneNumberWhereInput;
    orderBy?: PhoneNumberOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<PhoneNumber>;
  phoneNumbersConnection: (args?: {
    where?: PhoneNumberWhereInput;
    orderBy?: PhoneNumberOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PhoneNumberConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createEmail: (data: EmailCreateInput) => EmailPromise;
  updateEmail: (args: {
    data: EmailUpdateInput;
    where: EmailWhereUniqueInput;
  }) => EmailPromise;
  updateManyEmails: (args: {
    data: EmailUpdateManyMutationInput;
    where?: EmailWhereInput;
  }) => BatchPayloadPromise;
  upsertEmail: (args: {
    where: EmailWhereUniqueInput;
    create: EmailCreateInput;
    update: EmailUpdateInput;
  }) => EmailPromise;
  deleteEmail: (where: EmailWhereUniqueInput) => EmailPromise;
  deleteManyEmails: (where?: EmailWhereInput) => BatchPayloadPromise;
  createPhoneNumber: (data: PhoneNumberCreateInput) => PhoneNumberPromise;
  updatePhoneNumber: (args: {
    data: PhoneNumberUpdateInput;
    where: PhoneNumberWhereUniqueInput;
  }) => PhoneNumberPromise;
  updateManyPhoneNumbers: (args: {
    data: PhoneNumberUpdateManyMutationInput;
    where?: PhoneNumberWhereInput;
  }) => BatchPayloadPromise;
  upsertPhoneNumber: (args: {
    where: PhoneNumberWhereUniqueInput;
    create: PhoneNumberCreateInput;
    update: PhoneNumberUpdateInput;
  }) => PhoneNumberPromise;
  deletePhoneNumber: (where: PhoneNumberWhereUniqueInput) => PhoneNumberPromise;
  deleteManyPhoneNumbers: (
    where?: PhoneNumberWhereInput
  ) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  email: (
    where?: EmailSubscriptionWhereInput
  ) => EmailSubscriptionPayloadSubscription;
  phoneNumber: (
    where?: PhoneNumberSubscriptionWhereInput
  ) => PhoneNumberSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type EmailOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "value_ASC"
  | "value_DESC";

export type PhoneNumberOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "type_ASC"
  | "type_DESC"
  | "value_ASC"
  | "value_DESC";

export type PhoneNumberUse = "PERSONAL" | "WORK";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "middleName_ASC"
  | "middleName_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type EmailWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface EmailWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  value?: Maybe<String>;
  value_not?: Maybe<String>;
  value_in?: Maybe<String[] | String>;
  value_not_in?: Maybe<String[] | String>;
  value_lt?: Maybe<String>;
  value_lte?: Maybe<String>;
  value_gt?: Maybe<String>;
  value_gte?: Maybe<String>;
  value_contains?: Maybe<String>;
  value_not_contains?: Maybe<String>;
  value_starts_with?: Maybe<String>;
  value_not_starts_with?: Maybe<String>;
  value_ends_with?: Maybe<String>;
  value_not_ends_with?: Maybe<String>;
  owner?: Maybe<UserWhereInput>;
  AND?: Maybe<EmailWhereInput[] | EmailWhereInput>;
  OR?: Maybe<EmailWhereInput[] | EmailWhereInput>;
  NOT?: Maybe<EmailWhereInput[] | EmailWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  firstName?: Maybe<String>;
  firstName_not?: Maybe<String>;
  firstName_in?: Maybe<String[] | String>;
  firstName_not_in?: Maybe<String[] | String>;
  firstName_lt?: Maybe<String>;
  firstName_lte?: Maybe<String>;
  firstName_gt?: Maybe<String>;
  firstName_gte?: Maybe<String>;
  firstName_contains?: Maybe<String>;
  firstName_not_contains?: Maybe<String>;
  firstName_starts_with?: Maybe<String>;
  firstName_not_starts_with?: Maybe<String>;
  firstName_ends_with?: Maybe<String>;
  firstName_not_ends_with?: Maybe<String>;
  lastName?: Maybe<String>;
  lastName_not?: Maybe<String>;
  lastName_in?: Maybe<String[] | String>;
  lastName_not_in?: Maybe<String[] | String>;
  lastName_lt?: Maybe<String>;
  lastName_lte?: Maybe<String>;
  lastName_gt?: Maybe<String>;
  lastName_gte?: Maybe<String>;
  lastName_contains?: Maybe<String>;
  lastName_not_contains?: Maybe<String>;
  lastName_starts_with?: Maybe<String>;
  lastName_not_starts_with?: Maybe<String>;
  lastName_ends_with?: Maybe<String>;
  lastName_not_ends_with?: Maybe<String>;
  middleName?: Maybe<String>;
  middleName_not?: Maybe<String>;
  middleName_in?: Maybe<String[] | String>;
  middleName_not_in?: Maybe<String[] | String>;
  middleName_lt?: Maybe<String>;
  middleName_lte?: Maybe<String>;
  middleName_gt?: Maybe<String>;
  middleName_gte?: Maybe<String>;
  middleName_contains?: Maybe<String>;
  middleName_not_contains?: Maybe<String>;
  middleName_starts_with?: Maybe<String>;
  middleName_not_starts_with?: Maybe<String>;
  middleName_ends_with?: Maybe<String>;
  middleName_not_ends_with?: Maybe<String>;
  emails_every?: Maybe<EmailWhereInput>;
  emails_some?: Maybe<EmailWhereInput>;
  emails_none?: Maybe<EmailWhereInput>;
  phoneNumbers_every?: Maybe<PhoneNumberWhereInput>;
  phoneNumbers_some?: Maybe<PhoneNumberWhereInput>;
  phoneNumbers_none?: Maybe<PhoneNumberWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface PhoneNumberWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  type?: Maybe<String>;
  type_not?: Maybe<String>;
  type_in?: Maybe<String[] | String>;
  type_not_in?: Maybe<String[] | String>;
  type_lt?: Maybe<String>;
  type_lte?: Maybe<String>;
  type_gt?: Maybe<String>;
  type_gte?: Maybe<String>;
  type_contains?: Maybe<String>;
  type_not_contains?: Maybe<String>;
  type_starts_with?: Maybe<String>;
  type_not_starts_with?: Maybe<String>;
  type_ends_with?: Maybe<String>;
  type_not_ends_with?: Maybe<String>;
  value?: Maybe<String>;
  value_not?: Maybe<String>;
  value_in?: Maybe<String[] | String>;
  value_not_in?: Maybe<String[] | String>;
  value_lt?: Maybe<String>;
  value_lte?: Maybe<String>;
  value_gt?: Maybe<String>;
  value_gte?: Maybe<String>;
  value_contains?: Maybe<String>;
  value_not_contains?: Maybe<String>;
  value_starts_with?: Maybe<String>;
  value_not_starts_with?: Maybe<String>;
  value_ends_with?: Maybe<String>;
  value_not_ends_with?: Maybe<String>;
  owner?: Maybe<UserWhereInput>;
  AND?: Maybe<PhoneNumberWhereInput[] | PhoneNumberWhereInput>;
  OR?: Maybe<PhoneNumberWhereInput[] | PhoneNumberWhereInput>;
  NOT?: Maybe<PhoneNumberWhereInput[] | PhoneNumberWhereInput>;
}

export type PhoneNumberWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface EmailCreateInput {
  id?: Maybe<ID_Input>;
  value: String;
  owner?: Maybe<UserCreateOneWithoutEmailsInput>;
}

export interface UserCreateOneWithoutEmailsInput {
  create?: Maybe<UserCreateWithoutEmailsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutEmailsInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  firstName: String;
  lastName: String;
  middleName?: Maybe<String>;
  phoneNumbers?: Maybe<PhoneNumberCreateManyWithoutOwnerInput>;
}

export interface PhoneNumberCreateManyWithoutOwnerInput {
  create?: Maybe<
    PhoneNumberCreateWithoutOwnerInput[] | PhoneNumberCreateWithoutOwnerInput
  >;
  connect?: Maybe<PhoneNumberWhereUniqueInput[] | PhoneNumberWhereUniqueInput>;
}

export interface PhoneNumberCreateWithoutOwnerInput {
  id?: Maybe<ID_Input>;
  type: String;
  use?: Maybe<PhoneNumberCreateuseInput>;
  value: String;
}

export interface PhoneNumberCreateuseInput {
  set?: Maybe<PhoneNumberUse[] | PhoneNumberUse>;
}

export interface EmailUpdateInput {
  value?: Maybe<String>;
  owner?: Maybe<UserUpdateOneWithoutEmailsInput>;
}

export interface UserUpdateOneWithoutEmailsInput {
  create?: Maybe<UserCreateWithoutEmailsInput>;
  update?: Maybe<UserUpdateWithoutEmailsDataInput>;
  upsert?: Maybe<UserUpsertWithoutEmailsInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutEmailsDataInput {
  name?: Maybe<String>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  middleName?: Maybe<String>;
  phoneNumbers?: Maybe<PhoneNumberUpdateManyWithoutOwnerInput>;
}

export interface PhoneNumberUpdateManyWithoutOwnerInput {
  create?: Maybe<
    PhoneNumberCreateWithoutOwnerInput[] | PhoneNumberCreateWithoutOwnerInput
  >;
  delete?: Maybe<PhoneNumberWhereUniqueInput[] | PhoneNumberWhereUniqueInput>;
  connect?: Maybe<PhoneNumberWhereUniqueInput[] | PhoneNumberWhereUniqueInput>;
  set?: Maybe<PhoneNumberWhereUniqueInput[] | PhoneNumberWhereUniqueInput>;
  disconnect?: Maybe<
    PhoneNumberWhereUniqueInput[] | PhoneNumberWhereUniqueInput
  >;
  update?: Maybe<
    | PhoneNumberUpdateWithWhereUniqueWithoutOwnerInput[]
    | PhoneNumberUpdateWithWhereUniqueWithoutOwnerInput
  >;
  upsert?: Maybe<
    | PhoneNumberUpsertWithWhereUniqueWithoutOwnerInput[]
    | PhoneNumberUpsertWithWhereUniqueWithoutOwnerInput
  >;
  deleteMany?: Maybe<
    PhoneNumberScalarWhereInput[] | PhoneNumberScalarWhereInput
  >;
  updateMany?: Maybe<
    | PhoneNumberUpdateManyWithWhereNestedInput[]
    | PhoneNumberUpdateManyWithWhereNestedInput
  >;
}

export interface PhoneNumberUpdateWithWhereUniqueWithoutOwnerInput {
  where: PhoneNumberWhereUniqueInput;
  data: PhoneNumberUpdateWithoutOwnerDataInput;
}

export interface PhoneNumberUpdateWithoutOwnerDataInput {
  type?: Maybe<String>;
  use?: Maybe<PhoneNumberUpdateuseInput>;
  value?: Maybe<String>;
}

export interface PhoneNumberUpdateuseInput {
  set?: Maybe<PhoneNumberUse[] | PhoneNumberUse>;
}

export interface PhoneNumberUpsertWithWhereUniqueWithoutOwnerInput {
  where: PhoneNumberWhereUniqueInput;
  update: PhoneNumberUpdateWithoutOwnerDataInput;
  create: PhoneNumberCreateWithoutOwnerInput;
}

export interface PhoneNumberScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  type?: Maybe<String>;
  type_not?: Maybe<String>;
  type_in?: Maybe<String[] | String>;
  type_not_in?: Maybe<String[] | String>;
  type_lt?: Maybe<String>;
  type_lte?: Maybe<String>;
  type_gt?: Maybe<String>;
  type_gte?: Maybe<String>;
  type_contains?: Maybe<String>;
  type_not_contains?: Maybe<String>;
  type_starts_with?: Maybe<String>;
  type_not_starts_with?: Maybe<String>;
  type_ends_with?: Maybe<String>;
  type_not_ends_with?: Maybe<String>;
  value?: Maybe<String>;
  value_not?: Maybe<String>;
  value_in?: Maybe<String[] | String>;
  value_not_in?: Maybe<String[] | String>;
  value_lt?: Maybe<String>;
  value_lte?: Maybe<String>;
  value_gt?: Maybe<String>;
  value_gte?: Maybe<String>;
  value_contains?: Maybe<String>;
  value_not_contains?: Maybe<String>;
  value_starts_with?: Maybe<String>;
  value_not_starts_with?: Maybe<String>;
  value_ends_with?: Maybe<String>;
  value_not_ends_with?: Maybe<String>;
  AND?: Maybe<PhoneNumberScalarWhereInput[] | PhoneNumberScalarWhereInput>;
  OR?: Maybe<PhoneNumberScalarWhereInput[] | PhoneNumberScalarWhereInput>;
  NOT?: Maybe<PhoneNumberScalarWhereInput[] | PhoneNumberScalarWhereInput>;
}

export interface PhoneNumberUpdateManyWithWhereNestedInput {
  where: PhoneNumberScalarWhereInput;
  data: PhoneNumberUpdateManyDataInput;
}

export interface PhoneNumberUpdateManyDataInput {
  type?: Maybe<String>;
  use?: Maybe<PhoneNumberUpdateuseInput>;
  value?: Maybe<String>;
}

export interface UserUpsertWithoutEmailsInput {
  update: UserUpdateWithoutEmailsDataInput;
  create: UserCreateWithoutEmailsInput;
}

export interface EmailUpdateManyMutationInput {
  value?: Maybe<String>;
}

export interface PhoneNumberCreateInput {
  id?: Maybe<ID_Input>;
  type: String;
  use?: Maybe<PhoneNumberCreateuseInput>;
  value: String;
  owner?: Maybe<UserCreateOneWithoutPhoneNumbersInput>;
}

export interface UserCreateOneWithoutPhoneNumbersInput {
  create?: Maybe<UserCreateWithoutPhoneNumbersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutPhoneNumbersInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  firstName: String;
  lastName: String;
  middleName?: Maybe<String>;
  emails?: Maybe<EmailCreateManyWithoutOwnerInput>;
}

export interface EmailCreateManyWithoutOwnerInput {
  create?: Maybe<EmailCreateWithoutOwnerInput[] | EmailCreateWithoutOwnerInput>;
  connect?: Maybe<EmailWhereUniqueInput[] | EmailWhereUniqueInput>;
}

export interface EmailCreateWithoutOwnerInput {
  id?: Maybe<ID_Input>;
  value: String;
}

export interface PhoneNumberUpdateInput {
  type?: Maybe<String>;
  use?: Maybe<PhoneNumberUpdateuseInput>;
  value?: Maybe<String>;
  owner?: Maybe<UserUpdateOneWithoutPhoneNumbersInput>;
}

export interface UserUpdateOneWithoutPhoneNumbersInput {
  create?: Maybe<UserCreateWithoutPhoneNumbersInput>;
  update?: Maybe<UserUpdateWithoutPhoneNumbersDataInput>;
  upsert?: Maybe<UserUpsertWithoutPhoneNumbersInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutPhoneNumbersDataInput {
  name?: Maybe<String>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  middleName?: Maybe<String>;
  emails?: Maybe<EmailUpdateManyWithoutOwnerInput>;
}

export interface EmailUpdateManyWithoutOwnerInput {
  create?: Maybe<EmailCreateWithoutOwnerInput[] | EmailCreateWithoutOwnerInput>;
  delete?: Maybe<EmailWhereUniqueInput[] | EmailWhereUniqueInput>;
  connect?: Maybe<EmailWhereUniqueInput[] | EmailWhereUniqueInput>;
  set?: Maybe<EmailWhereUniqueInput[] | EmailWhereUniqueInput>;
  disconnect?: Maybe<EmailWhereUniqueInput[] | EmailWhereUniqueInput>;
  update?: Maybe<
    | EmailUpdateWithWhereUniqueWithoutOwnerInput[]
    | EmailUpdateWithWhereUniqueWithoutOwnerInput
  >;
  upsert?: Maybe<
    | EmailUpsertWithWhereUniqueWithoutOwnerInput[]
    | EmailUpsertWithWhereUniqueWithoutOwnerInput
  >;
  deleteMany?: Maybe<EmailScalarWhereInput[] | EmailScalarWhereInput>;
  updateMany?: Maybe<
    EmailUpdateManyWithWhereNestedInput[] | EmailUpdateManyWithWhereNestedInput
  >;
}

export interface EmailUpdateWithWhereUniqueWithoutOwnerInput {
  where: EmailWhereUniqueInput;
  data: EmailUpdateWithoutOwnerDataInput;
}

export interface EmailUpdateWithoutOwnerDataInput {
  value?: Maybe<String>;
}

export interface EmailUpsertWithWhereUniqueWithoutOwnerInput {
  where: EmailWhereUniqueInput;
  update: EmailUpdateWithoutOwnerDataInput;
  create: EmailCreateWithoutOwnerInput;
}

export interface EmailScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  value?: Maybe<String>;
  value_not?: Maybe<String>;
  value_in?: Maybe<String[] | String>;
  value_not_in?: Maybe<String[] | String>;
  value_lt?: Maybe<String>;
  value_lte?: Maybe<String>;
  value_gt?: Maybe<String>;
  value_gte?: Maybe<String>;
  value_contains?: Maybe<String>;
  value_not_contains?: Maybe<String>;
  value_starts_with?: Maybe<String>;
  value_not_starts_with?: Maybe<String>;
  value_ends_with?: Maybe<String>;
  value_not_ends_with?: Maybe<String>;
  AND?: Maybe<EmailScalarWhereInput[] | EmailScalarWhereInput>;
  OR?: Maybe<EmailScalarWhereInput[] | EmailScalarWhereInput>;
  NOT?: Maybe<EmailScalarWhereInput[] | EmailScalarWhereInput>;
}

export interface EmailUpdateManyWithWhereNestedInput {
  where: EmailScalarWhereInput;
  data: EmailUpdateManyDataInput;
}

export interface EmailUpdateManyDataInput {
  value?: Maybe<String>;
}

export interface UserUpsertWithoutPhoneNumbersInput {
  update: UserUpdateWithoutPhoneNumbersDataInput;
  create: UserCreateWithoutPhoneNumbersInput;
}

export interface PhoneNumberUpdateManyMutationInput {
  type?: Maybe<String>;
  use?: Maybe<PhoneNumberUpdateuseInput>;
  value?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  firstName: String;
  lastName: String;
  middleName?: Maybe<String>;
  emails?: Maybe<EmailCreateManyWithoutOwnerInput>;
  phoneNumbers?: Maybe<PhoneNumberCreateManyWithoutOwnerInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  middleName?: Maybe<String>;
  emails?: Maybe<EmailUpdateManyWithoutOwnerInput>;
  phoneNumbers?: Maybe<PhoneNumberUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  middleName?: Maybe<String>;
}

export interface EmailSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<EmailWhereInput>;
  AND?: Maybe<EmailSubscriptionWhereInput[] | EmailSubscriptionWhereInput>;
  OR?: Maybe<EmailSubscriptionWhereInput[] | EmailSubscriptionWhereInput>;
  NOT?: Maybe<EmailSubscriptionWhereInput[] | EmailSubscriptionWhereInput>;
}

export interface PhoneNumberSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PhoneNumberWhereInput>;
  AND?: Maybe<
    PhoneNumberSubscriptionWhereInput[] | PhoneNumberSubscriptionWhereInput
  >;
  OR?: Maybe<
    PhoneNumberSubscriptionWhereInput[] | PhoneNumberSubscriptionWhereInput
  >;
  NOT?: Maybe<
    PhoneNumberSubscriptionWhereInput[] | PhoneNumberSubscriptionWhereInput
  >;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Email {
  id: ID_Output;
  value: String;
}

export interface EmailPromise extends Promise<Email>, Fragmentable {
  id: () => Promise<ID_Output>;
  value: () => Promise<String>;
  owner: <T = UserPromise>() => T;
}

export interface EmailSubscription
  extends Promise<AsyncIterator<Email>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  value: () => Promise<AsyncIterator<String>>;
  owner: <T = UserSubscription>() => T;
}

export interface EmailNullablePromise
  extends Promise<Email | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  value: () => Promise<String>;
  owner: <T = UserPromise>() => T;
}

export interface User {
  id: ID_Output;
  name?: String;
  firstName: String;
  lastName: String;
  middleName?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  middleName: () => Promise<String>;
  emails: <T = FragmentableArray<Email>>(args?: {
    where?: EmailWhereInput;
    orderBy?: EmailOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  phoneNumbers: <T = FragmentableArray<PhoneNumber>>(args?: {
    where?: PhoneNumberWhereInput;
    orderBy?: PhoneNumberOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  middleName: () => Promise<AsyncIterator<String>>;
  emails: <T = Promise<AsyncIterator<EmailSubscription>>>(args?: {
    where?: EmailWhereInput;
    orderBy?: EmailOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  phoneNumbers: <T = Promise<AsyncIterator<PhoneNumberSubscription>>>(args?: {
    where?: PhoneNumberWhereInput;
    orderBy?: PhoneNumberOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  middleName: () => Promise<String>;
  emails: <T = FragmentableArray<Email>>(args?: {
    where?: EmailWhereInput;
    orderBy?: EmailOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  phoneNumbers: <T = FragmentableArray<PhoneNumber>>(args?: {
    where?: PhoneNumberWhereInput;
    orderBy?: PhoneNumberOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface PhoneNumber {
  id: ID_Output;
  type: String;
  use: PhoneNumberUse[];
  value: String;
}

export interface PhoneNumberPromise extends Promise<PhoneNumber>, Fragmentable {
  id: () => Promise<ID_Output>;
  type: () => Promise<String>;
  use: () => Promise<PhoneNumberUse[]>;
  value: () => Promise<String>;
  owner: <T = UserPromise>() => T;
}

export interface PhoneNumberSubscription
  extends Promise<AsyncIterator<PhoneNumber>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  type: () => Promise<AsyncIterator<String>>;
  use: () => Promise<AsyncIterator<PhoneNumberUse[]>>;
  value: () => Promise<AsyncIterator<String>>;
  owner: <T = UserSubscription>() => T;
}

export interface PhoneNumberNullablePromise
  extends Promise<PhoneNumber | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  type: () => Promise<String>;
  use: () => Promise<PhoneNumberUse[]>;
  value: () => Promise<String>;
  owner: <T = UserPromise>() => T;
}

export interface EmailConnection {
  pageInfo: PageInfo;
  edges: EmailEdge[];
}

export interface EmailConnectionPromise
  extends Promise<EmailConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EmailEdge>>() => T;
  aggregate: <T = AggregateEmailPromise>() => T;
}

export interface EmailConnectionSubscription
  extends Promise<AsyncIterator<EmailConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EmailEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEmailSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface EmailEdge {
  node: Email;
  cursor: String;
}

export interface EmailEdgePromise extends Promise<EmailEdge>, Fragmentable {
  node: <T = EmailPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EmailEdgeSubscription
  extends Promise<AsyncIterator<EmailEdge>>,
    Fragmentable {
  node: <T = EmailSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateEmail {
  count: Int;
}

export interface AggregateEmailPromise
  extends Promise<AggregateEmail>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEmailSubscription
  extends Promise<AsyncIterator<AggregateEmail>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PhoneNumberConnection {
  pageInfo: PageInfo;
  edges: PhoneNumberEdge[];
}

export interface PhoneNumberConnectionPromise
  extends Promise<PhoneNumberConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PhoneNumberEdge>>() => T;
  aggregate: <T = AggregatePhoneNumberPromise>() => T;
}

export interface PhoneNumberConnectionSubscription
  extends Promise<AsyncIterator<PhoneNumberConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PhoneNumberEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePhoneNumberSubscription>() => T;
}

export interface PhoneNumberEdge {
  node: PhoneNumber;
  cursor: String;
}

export interface PhoneNumberEdgePromise
  extends Promise<PhoneNumberEdge>,
    Fragmentable {
  node: <T = PhoneNumberPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PhoneNumberEdgeSubscription
  extends Promise<AsyncIterator<PhoneNumberEdge>>,
    Fragmentable {
  node: <T = PhoneNumberSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePhoneNumber {
  count: Int;
}

export interface AggregatePhoneNumberPromise
  extends Promise<AggregatePhoneNumber>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePhoneNumberSubscription
  extends Promise<AsyncIterator<AggregatePhoneNumber>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface EmailSubscriptionPayload {
  mutation: MutationType;
  node: Email;
  updatedFields: String[];
  previousValues: EmailPreviousValues;
}

export interface EmailSubscriptionPayloadPromise
  extends Promise<EmailSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EmailPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EmailPreviousValuesPromise>() => T;
}

export interface EmailSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EmailSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EmailSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EmailPreviousValuesSubscription>() => T;
}

export interface EmailPreviousValues {
  id: ID_Output;
  value: String;
}

export interface EmailPreviousValuesPromise
  extends Promise<EmailPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  value: () => Promise<String>;
}

export interface EmailPreviousValuesSubscription
  extends Promise<AsyncIterator<EmailPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  value: () => Promise<AsyncIterator<String>>;
}

export interface PhoneNumberSubscriptionPayload {
  mutation: MutationType;
  node: PhoneNumber;
  updatedFields: String[];
  previousValues: PhoneNumberPreviousValues;
}

export interface PhoneNumberSubscriptionPayloadPromise
  extends Promise<PhoneNumberSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PhoneNumberPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PhoneNumberPreviousValuesPromise>() => T;
}

export interface PhoneNumberSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PhoneNumberSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PhoneNumberSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PhoneNumberPreviousValuesSubscription>() => T;
}

export interface PhoneNumberPreviousValues {
  id: ID_Output;
  type: String;
  use: PhoneNumberUse[];
  value: String;
}

export interface PhoneNumberPreviousValuesPromise
  extends Promise<PhoneNumberPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  type: () => Promise<String>;
  use: () => Promise<PhoneNumberUse[]>;
  value: () => Promise<String>;
}

export interface PhoneNumberPreviousValuesSubscription
  extends Promise<AsyncIterator<PhoneNumberPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  type: () => Promise<AsyncIterator<String>>;
  use: () => Promise<AsyncIterator<PhoneNumberUse[]>>;
  value: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name?: String;
  firstName: String;
  lastName: String;
  middleName?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  middleName: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  middleName: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Email",
    embedded: false
  },
  {
    name: "PhoneNumber",
    embedded: false
  },
  {
    name: "PhoneNumberType",
    embedded: false
  },
  {
    name: "PhoneNumberUse",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
