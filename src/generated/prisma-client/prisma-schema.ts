// Code generated by Prisma (prisma@1.35.0-beta). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateAttribute {
  count: Int!
}

type AggregateEmail {
  count: Int!
}

type AggregateIdentityProof {
  count: Int!
}

type AggregatePhoneNumber {
  count: Int!
}

type AggregateTaxId {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Attribute {
  id: ID!
  attr_type: String!
  tax_id(where: TaxIdWhereInput, orderBy: TaxIdOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TaxId!]
  email(where: EmailWhereInput, orderBy: EmailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Email!]
  phone_number(where: PhoneNumberWhereInput, orderBy: PhoneNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PhoneNumber!]
}

type AttributeConnection {
  pageInfo: PageInfo!
  edges: [AttributeEdge]!
  aggregate: AggregateAttribute!
}

input AttributeCreateInput {
  id: ID
  attr_type: String!
  tax_id: TaxIdCreateManyInput
  email: EmailCreateManyWithoutAttributeInput
  phone_number: PhoneNumberCreateManyWithoutAttributeInput
}

input AttributeCreateManyWithoutEmailInput {
  create: [AttributeCreateWithoutEmailInput!]
  connect: [AttributeWhereUniqueInput!]
}

input AttributeCreateManyWithoutPhone_numberInput {
  create: [AttributeCreateWithoutPhone_numberInput!]
  connect: [AttributeWhereUniqueInput!]
}

input AttributeCreateWithoutEmailInput {
  id: ID
  attr_type: String!
  tax_id: TaxIdCreateManyInput
  phone_number: PhoneNumberCreateManyWithoutAttributeInput
}

input AttributeCreateWithoutPhone_numberInput {
  id: ID
  attr_type: String!
  tax_id: TaxIdCreateManyInput
  email: EmailCreateManyWithoutAttributeInput
}

type AttributeEdge {
  node: Attribute!
  cursor: String!
}

enum AttributeOrderByInput {
  id_ASC
  id_DESC
  attr_type_ASC
  attr_type_DESC
}

type AttributePreviousValues {
  id: ID!
  attr_type: String!
}

input AttributeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  attr_type: String
  attr_type_not: String
  attr_type_in: [String!]
  attr_type_not_in: [String!]
  attr_type_lt: String
  attr_type_lte: String
  attr_type_gt: String
  attr_type_gte: String
  attr_type_contains: String
  attr_type_not_contains: String
  attr_type_starts_with: String
  attr_type_not_starts_with: String
  attr_type_ends_with: String
  attr_type_not_ends_with: String
  AND: [AttributeScalarWhereInput!]
  OR: [AttributeScalarWhereInput!]
  NOT: [AttributeScalarWhereInput!]
}

type AttributeSubscriptionPayload {
  mutation: MutationType!
  node: Attribute
  updatedFields: [String!]
  previousValues: AttributePreviousValues
}

input AttributeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AttributeWhereInput
  AND: [AttributeSubscriptionWhereInput!]
  OR: [AttributeSubscriptionWhereInput!]
  NOT: [AttributeSubscriptionWhereInput!]
}

input AttributeUpdateInput {
  attr_type: String
  tax_id: TaxIdUpdateManyInput
  email: EmailUpdateManyWithoutAttributeInput
  phone_number: PhoneNumberUpdateManyWithoutAttributeInput
}

input AttributeUpdateManyDataInput {
  attr_type: String
}

input AttributeUpdateManyMutationInput {
  attr_type: String
}

input AttributeUpdateManyWithoutEmailInput {
  create: [AttributeCreateWithoutEmailInput!]
  delete: [AttributeWhereUniqueInput!]
  connect: [AttributeWhereUniqueInput!]
  set: [AttributeWhereUniqueInput!]
  disconnect: [AttributeWhereUniqueInput!]
  update: [AttributeUpdateWithWhereUniqueWithoutEmailInput!]
  upsert: [AttributeUpsertWithWhereUniqueWithoutEmailInput!]
  deleteMany: [AttributeScalarWhereInput!]
  updateMany: [AttributeUpdateManyWithWhereNestedInput!]
}

input AttributeUpdateManyWithoutPhone_numberInput {
  create: [AttributeCreateWithoutPhone_numberInput!]
  delete: [AttributeWhereUniqueInput!]
  connect: [AttributeWhereUniqueInput!]
  set: [AttributeWhereUniqueInput!]
  disconnect: [AttributeWhereUniqueInput!]
  update: [AttributeUpdateWithWhereUniqueWithoutPhone_numberInput!]
  upsert: [AttributeUpsertWithWhereUniqueWithoutPhone_numberInput!]
  deleteMany: [AttributeScalarWhereInput!]
  updateMany: [AttributeUpdateManyWithWhereNestedInput!]
}

input AttributeUpdateManyWithWhereNestedInput {
  where: AttributeScalarWhereInput!
  data: AttributeUpdateManyDataInput!
}

input AttributeUpdateWithoutEmailDataInput {
  attr_type: String
  tax_id: TaxIdUpdateManyInput
  phone_number: PhoneNumberUpdateManyWithoutAttributeInput
}

input AttributeUpdateWithoutPhone_numberDataInput {
  attr_type: String
  tax_id: TaxIdUpdateManyInput
  email: EmailUpdateManyWithoutAttributeInput
}

input AttributeUpdateWithWhereUniqueWithoutEmailInput {
  where: AttributeWhereUniqueInput!
  data: AttributeUpdateWithoutEmailDataInput!
}

input AttributeUpdateWithWhereUniqueWithoutPhone_numberInput {
  where: AttributeWhereUniqueInput!
  data: AttributeUpdateWithoutPhone_numberDataInput!
}

input AttributeUpsertWithWhereUniqueWithoutEmailInput {
  where: AttributeWhereUniqueInput!
  update: AttributeUpdateWithoutEmailDataInput!
  create: AttributeCreateWithoutEmailInput!
}

input AttributeUpsertWithWhereUniqueWithoutPhone_numberInput {
  where: AttributeWhereUniqueInput!
  update: AttributeUpdateWithoutPhone_numberDataInput!
  create: AttributeCreateWithoutPhone_numberInput!
}

input AttributeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  attr_type: String
  attr_type_not: String
  attr_type_in: [String!]
  attr_type_not_in: [String!]
  attr_type_lt: String
  attr_type_lte: String
  attr_type_gt: String
  attr_type_gte: String
  attr_type_contains: String
  attr_type_not_contains: String
  attr_type_starts_with: String
  attr_type_not_starts_with: String
  attr_type_ends_with: String
  attr_type_not_ends_with: String
  tax_id_every: TaxIdWhereInput
  tax_id_some: TaxIdWhereInput
  tax_id_none: TaxIdWhereInput
  email_every: EmailWhereInput
  email_some: EmailWhereInput
  email_none: EmailWhereInput
  phone_number_every: PhoneNumberWhereInput
  phone_number_some: PhoneNumberWhereInput
  phone_number_none: PhoneNumberWhereInput
  AND: [AttributeWhereInput!]
  OR: [AttributeWhereInput!]
  NOT: [AttributeWhereInput!]
}

input AttributeWhereUniqueInput {
  id: ID
}

enum AuthLevel {
  ADMIN
  USER
  PROSPECT
  BLACKLISTED
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Email {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  owner: User!
  attribute(where: AttributeWhereInput, orderBy: AttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attribute!]
}

type EmailConnection {
  pageInfo: PageInfo!
  edges: [EmailEdge]!
  aggregate: AggregateEmail!
}

input EmailCreateInput {
  id: ID
  owner: UserCreateOneInput!
  attribute: AttributeCreateManyWithoutEmailInput
}

input EmailCreateManyInput {
  create: [EmailCreateInput!]
  connect: [EmailWhereUniqueInput!]
}

input EmailCreateManyWithoutAttributeInput {
  create: [EmailCreateWithoutAttributeInput!]
  connect: [EmailWhereUniqueInput!]
}

input EmailCreateWithoutAttributeInput {
  id: ID
  owner: UserCreateOneInput!
}

type EmailEdge {
  node: Email!
  cursor: String!
}

enum EmailOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EmailPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input EmailScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [EmailScalarWhereInput!]
  OR: [EmailScalarWhereInput!]
  NOT: [EmailScalarWhereInput!]
}

type EmailSubscriptionPayload {
  mutation: MutationType!
  node: Email
  updatedFields: [String!]
  previousValues: EmailPreviousValues
}

input EmailSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EmailWhereInput
  AND: [EmailSubscriptionWhereInput!]
  OR: [EmailSubscriptionWhereInput!]
  NOT: [EmailSubscriptionWhereInput!]
}

input EmailUpdateDataInput {
  owner: UserUpdateOneRequiredInput
  attribute: AttributeUpdateManyWithoutEmailInput
}

input EmailUpdateInput {
  owner: UserUpdateOneRequiredInput
  attribute: AttributeUpdateManyWithoutEmailInput
}

input EmailUpdateManyInput {
  create: [EmailCreateInput!]
  update: [EmailUpdateWithWhereUniqueNestedInput!]
  upsert: [EmailUpsertWithWhereUniqueNestedInput!]
  delete: [EmailWhereUniqueInput!]
  connect: [EmailWhereUniqueInput!]
  set: [EmailWhereUniqueInput!]
  disconnect: [EmailWhereUniqueInput!]
  deleteMany: [EmailScalarWhereInput!]
}

input EmailUpdateManyWithoutAttributeInput {
  create: [EmailCreateWithoutAttributeInput!]
  delete: [EmailWhereUniqueInput!]
  connect: [EmailWhereUniqueInput!]
  set: [EmailWhereUniqueInput!]
  disconnect: [EmailWhereUniqueInput!]
  update: [EmailUpdateWithWhereUniqueWithoutAttributeInput!]
  upsert: [EmailUpsertWithWhereUniqueWithoutAttributeInput!]
  deleteMany: [EmailScalarWhereInput!]
}

input EmailUpdateWithoutAttributeDataInput {
  owner: UserUpdateOneRequiredInput
}

input EmailUpdateWithWhereUniqueNestedInput {
  where: EmailWhereUniqueInput!
  data: EmailUpdateDataInput!
}

input EmailUpdateWithWhereUniqueWithoutAttributeInput {
  where: EmailWhereUniqueInput!
  data: EmailUpdateWithoutAttributeDataInput!
}

input EmailUpsertWithWhereUniqueNestedInput {
  where: EmailWhereUniqueInput!
  update: EmailUpdateDataInput!
  create: EmailCreateInput!
}

input EmailUpsertWithWhereUniqueWithoutAttributeInput {
  where: EmailWhereUniqueInput!
  update: EmailUpdateWithoutAttributeDataInput!
  create: EmailCreateWithoutAttributeInput!
}

input EmailWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  owner: UserWhereInput
  attribute_every: AttributeWhereInput
  attribute_some: AttributeWhereInput
  attribute_none: AttributeWhereInput
  AND: [EmailWhereInput!]
  OR: [EmailWhereInput!]
  NOT: [EmailWhereInput!]
}

input EmailWhereUniqueInput {
  id: ID
}

type IdentityProof {
  id: ID!
  tax_id(where: TaxIdWhereInput, orderBy: TaxIdOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TaxId!]
  email(where: EmailWhereInput, orderBy: EmailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Email!]
  phone_number(where: PhoneNumberWhereInput, orderBy: PhoneNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PhoneNumber!]
}

type IdentityProofConnection {
  pageInfo: PageInfo!
  edges: [IdentityProofEdge]!
  aggregate: AggregateIdentityProof!
}

input IdentityProofCreateInput {
  id: ID
  tax_id: TaxIdCreateManyInput
  email: EmailCreateManyInput
  phone_number: PhoneNumberCreateManyInput
}

input IdentityProofCreateOneInput {
  create: IdentityProofCreateInput
  connect: IdentityProofWhereUniqueInput
}

type IdentityProofEdge {
  node: IdentityProof!
  cursor: String!
}

enum IdentityProofOrderByInput {
  id_ASC
  id_DESC
}

type IdentityProofPreviousValues {
  id: ID!
}

type IdentityProofSubscriptionPayload {
  mutation: MutationType!
  node: IdentityProof
  updatedFields: [String!]
  previousValues: IdentityProofPreviousValues
}

input IdentityProofSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IdentityProofWhereInput
  AND: [IdentityProofSubscriptionWhereInput!]
  OR: [IdentityProofSubscriptionWhereInput!]
  NOT: [IdentityProofSubscriptionWhereInput!]
}

input IdentityProofUpdateDataInput {
  tax_id: TaxIdUpdateManyInput
  email: EmailUpdateManyInput
  phone_number: PhoneNumberUpdateManyInput
}

input IdentityProofUpdateInput {
  tax_id: TaxIdUpdateManyInput
  email: EmailUpdateManyInput
  phone_number: PhoneNumberUpdateManyInput
}

input IdentityProofUpdateOneInput {
  create: IdentityProofCreateInput
  update: IdentityProofUpdateDataInput
  upsert: IdentityProofUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: IdentityProofWhereUniqueInput
}

input IdentityProofUpsertNestedInput {
  update: IdentityProofUpdateDataInput!
  create: IdentityProofCreateInput!
}

input IdentityProofWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  tax_id_every: TaxIdWhereInput
  tax_id_some: TaxIdWhereInput
  tax_id_none: TaxIdWhereInput
  email_every: EmailWhereInput
  email_some: EmailWhereInput
  email_none: EmailWhereInput
  phone_number_every: PhoneNumberWhereInput
  phone_number_some: PhoneNumberWhereInput
  phone_number_none: PhoneNumberWhereInput
  AND: [IdentityProofWhereInput!]
  OR: [IdentityProofWhereInput!]
  NOT: [IdentityProofWhereInput!]
}

input IdentityProofWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAttribute(data: AttributeCreateInput!): Attribute!
  updateAttribute(data: AttributeUpdateInput!, where: AttributeWhereUniqueInput!): Attribute
  updateManyAttributes(data: AttributeUpdateManyMutationInput!, where: AttributeWhereInput): BatchPayload!
  upsertAttribute(where: AttributeWhereUniqueInput!, create: AttributeCreateInput!, update: AttributeUpdateInput!): Attribute!
  deleteAttribute(where: AttributeWhereUniqueInput!): Attribute
  deleteManyAttributes(where: AttributeWhereInput): BatchPayload!
  createEmail(data: EmailCreateInput!): Email!
  updateEmail(data: EmailUpdateInput!, where: EmailWhereUniqueInput!): Email
  upsertEmail(where: EmailWhereUniqueInput!, create: EmailCreateInput!, update: EmailUpdateInput!): Email!
  deleteEmail(where: EmailWhereUniqueInput!): Email
  deleteManyEmails(where: EmailWhereInput): BatchPayload!
  createIdentityProof(data: IdentityProofCreateInput!): IdentityProof!
  updateIdentityProof(data: IdentityProofUpdateInput!, where: IdentityProofWhereUniqueInput!): IdentityProof
  upsertIdentityProof(where: IdentityProofWhereUniqueInput!, create: IdentityProofCreateInput!, update: IdentityProofUpdateInput!): IdentityProof!
  deleteIdentityProof(where: IdentityProofWhereUniqueInput!): IdentityProof
  deleteManyIdentityProofs(where: IdentityProofWhereInput): BatchPayload!
  createPhoneNumber(data: PhoneNumberCreateInput!): PhoneNumber!
  updatePhoneNumber(data: PhoneNumberUpdateInput!, where: PhoneNumberWhereUniqueInput!): PhoneNumber
  upsertPhoneNumber(where: PhoneNumberWhereUniqueInput!, create: PhoneNumberCreateInput!, update: PhoneNumberUpdateInput!): PhoneNumber!
  deletePhoneNumber(where: PhoneNumberWhereUniqueInput!): PhoneNumber
  deleteManyPhoneNumbers(where: PhoneNumberWhereInput): BatchPayload!
  createTaxId(data: TaxIdCreateInput!): TaxId!
  updateTaxId(data: TaxIdUpdateInput!, where: TaxIdWhereUniqueInput!): TaxId
  upsertTaxId(where: TaxIdWhereUniqueInput!, create: TaxIdCreateInput!, update: TaxIdUpdateInput!): TaxId!
  deleteTaxId(where: TaxIdWhereUniqueInput!): TaxId
  deleteManyTaxIds(where: TaxIdWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type PhoneNumber {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  owner: User!
  attribute(where: AttributeWhereInput, orderBy: AttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attribute!]
}

type PhoneNumberConnection {
  pageInfo: PageInfo!
  edges: [PhoneNumberEdge]!
  aggregate: AggregatePhoneNumber!
}

input PhoneNumberCreateInput {
  id: ID
  owner: UserCreateOneInput!
  attribute: AttributeCreateManyWithoutPhone_numberInput
}

input PhoneNumberCreateManyInput {
  create: [PhoneNumberCreateInput!]
  connect: [PhoneNumberWhereUniqueInput!]
}

input PhoneNumberCreateManyWithoutAttributeInput {
  create: [PhoneNumberCreateWithoutAttributeInput!]
  connect: [PhoneNumberWhereUniqueInput!]
}

input PhoneNumberCreateWithoutAttributeInput {
  id: ID
  owner: UserCreateOneInput!
}

type PhoneNumberEdge {
  node: PhoneNumber!
  cursor: String!
}

enum PhoneNumberOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PhoneNumberPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input PhoneNumberScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PhoneNumberScalarWhereInput!]
  OR: [PhoneNumberScalarWhereInput!]
  NOT: [PhoneNumberScalarWhereInput!]
}

type PhoneNumberSubscriptionPayload {
  mutation: MutationType!
  node: PhoneNumber
  updatedFields: [String!]
  previousValues: PhoneNumberPreviousValues
}

input PhoneNumberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PhoneNumberWhereInput
  AND: [PhoneNumberSubscriptionWhereInput!]
  OR: [PhoneNumberSubscriptionWhereInput!]
  NOT: [PhoneNumberSubscriptionWhereInput!]
}

input PhoneNumberUpdateDataInput {
  owner: UserUpdateOneRequiredInput
  attribute: AttributeUpdateManyWithoutPhone_numberInput
}

input PhoneNumberUpdateInput {
  owner: UserUpdateOneRequiredInput
  attribute: AttributeUpdateManyWithoutPhone_numberInput
}

input PhoneNumberUpdateManyInput {
  create: [PhoneNumberCreateInput!]
  update: [PhoneNumberUpdateWithWhereUniqueNestedInput!]
  upsert: [PhoneNumberUpsertWithWhereUniqueNestedInput!]
  delete: [PhoneNumberWhereUniqueInput!]
  connect: [PhoneNumberWhereUniqueInput!]
  set: [PhoneNumberWhereUniqueInput!]
  disconnect: [PhoneNumberWhereUniqueInput!]
  deleteMany: [PhoneNumberScalarWhereInput!]
}

input PhoneNumberUpdateManyWithoutAttributeInput {
  create: [PhoneNumberCreateWithoutAttributeInput!]
  delete: [PhoneNumberWhereUniqueInput!]
  connect: [PhoneNumberWhereUniqueInput!]
  set: [PhoneNumberWhereUniqueInput!]
  disconnect: [PhoneNumberWhereUniqueInput!]
  update: [PhoneNumberUpdateWithWhereUniqueWithoutAttributeInput!]
  upsert: [PhoneNumberUpsertWithWhereUniqueWithoutAttributeInput!]
  deleteMany: [PhoneNumberScalarWhereInput!]
}

input PhoneNumberUpdateWithoutAttributeDataInput {
  owner: UserUpdateOneRequiredInput
}

input PhoneNumberUpdateWithWhereUniqueNestedInput {
  where: PhoneNumberWhereUniqueInput!
  data: PhoneNumberUpdateDataInput!
}

input PhoneNumberUpdateWithWhereUniqueWithoutAttributeInput {
  where: PhoneNumberWhereUniqueInput!
  data: PhoneNumberUpdateWithoutAttributeDataInput!
}

input PhoneNumberUpsertWithWhereUniqueNestedInput {
  where: PhoneNumberWhereUniqueInput!
  update: PhoneNumberUpdateDataInput!
  create: PhoneNumberCreateInput!
}

input PhoneNumberUpsertWithWhereUniqueWithoutAttributeInput {
  where: PhoneNumberWhereUniqueInput!
  update: PhoneNumberUpdateWithoutAttributeDataInput!
  create: PhoneNumberCreateWithoutAttributeInput!
}

input PhoneNumberWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  owner: UserWhereInput
  attribute_every: AttributeWhereInput
  attribute_some: AttributeWhereInput
  attribute_none: AttributeWhereInput
  AND: [PhoneNumberWhereInput!]
  OR: [PhoneNumberWhereInput!]
  NOT: [PhoneNumberWhereInput!]
}

input PhoneNumberWhereUniqueInput {
  id: ID
}

type Query {
  attribute(where: AttributeWhereUniqueInput!): Attribute
  attributes(where: AttributeWhereInput, orderBy: AttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attribute]!
  attributesConnection(where: AttributeWhereInput, orderBy: AttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AttributeConnection!
  email(where: EmailWhereUniqueInput!): Email
  emails(where: EmailWhereInput, orderBy: EmailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Email]!
  emailsConnection(where: EmailWhereInput, orderBy: EmailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmailConnection!
  identityProof(where: IdentityProofWhereUniqueInput!): IdentityProof
  identityProofs(where: IdentityProofWhereInput, orderBy: IdentityProofOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [IdentityProof]!
  identityProofsConnection(where: IdentityProofWhereInput, orderBy: IdentityProofOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IdentityProofConnection!
  phoneNumber(where: PhoneNumberWhereUniqueInput!): PhoneNumber
  phoneNumbers(where: PhoneNumberWhereInput, orderBy: PhoneNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PhoneNumber]!
  phoneNumbersConnection(where: PhoneNumberWhereInput, orderBy: PhoneNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PhoneNumberConnection!
  taxId(where: TaxIdWhereUniqueInput!): TaxId
  taxIds(where: TaxIdWhereInput, orderBy: TaxIdOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TaxId]!
  taxIdsConnection(where: TaxIdWhereInput, orderBy: TaxIdOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaxIdConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  attribute(where: AttributeSubscriptionWhereInput): AttributeSubscriptionPayload
  email(where: EmailSubscriptionWhereInput): EmailSubscriptionPayload
  identityProof(where: IdentityProofSubscriptionWhereInput): IdentityProofSubscriptionPayload
  phoneNumber(where: PhoneNumberSubscriptionWhereInput): PhoneNumberSubscriptionPayload
  taxId(where: TaxIdSubscriptionWhereInput): TaxIdSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type TaxId {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  owner: User!
}

type TaxIdConnection {
  pageInfo: PageInfo!
  edges: [TaxIdEdge]!
  aggregate: AggregateTaxId!
}

input TaxIdCreateInput {
  id: ID
  owner: UserCreateOneInput!
}

input TaxIdCreateManyInput {
  create: [TaxIdCreateInput!]
  connect: [TaxIdWhereUniqueInput!]
}

type TaxIdEdge {
  node: TaxId!
  cursor: String!
}

enum TaxIdOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TaxIdPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input TaxIdScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TaxIdScalarWhereInput!]
  OR: [TaxIdScalarWhereInput!]
  NOT: [TaxIdScalarWhereInput!]
}

type TaxIdSubscriptionPayload {
  mutation: MutationType!
  node: TaxId
  updatedFields: [String!]
  previousValues: TaxIdPreviousValues
}

input TaxIdSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TaxIdWhereInput
  AND: [TaxIdSubscriptionWhereInput!]
  OR: [TaxIdSubscriptionWhereInput!]
  NOT: [TaxIdSubscriptionWhereInput!]
}

input TaxIdUpdateDataInput {
  owner: UserUpdateOneRequiredInput
}

input TaxIdUpdateInput {
  owner: UserUpdateOneRequiredInput
}

input TaxIdUpdateManyInput {
  create: [TaxIdCreateInput!]
  update: [TaxIdUpdateWithWhereUniqueNestedInput!]
  upsert: [TaxIdUpsertWithWhereUniqueNestedInput!]
  delete: [TaxIdWhereUniqueInput!]
  connect: [TaxIdWhereUniqueInput!]
  set: [TaxIdWhereUniqueInput!]
  disconnect: [TaxIdWhereUniqueInput!]
  deleteMany: [TaxIdScalarWhereInput!]
}

input TaxIdUpdateWithWhereUniqueNestedInput {
  where: TaxIdWhereUniqueInput!
  data: TaxIdUpdateDataInput!
}

input TaxIdUpsertWithWhereUniqueNestedInput {
  where: TaxIdWhereUniqueInput!
  update: TaxIdUpdateDataInput!
  create: TaxIdCreateInput!
}

input TaxIdWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  owner: UserWhereInput
  AND: [TaxIdWhereInput!]
  OR: [TaxIdWhereInput!]
  NOT: [TaxIdWhereInput!]
}

input TaxIdWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String!
  id_proof: IdentityProof
  auth_level: AuthLevel
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  id_proof: IdentityProofCreateOneInput
  auth_level: AuthLevel
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  auth_level_ASC
  auth_level_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String!
  auth_level: AuthLevel
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  id_proof: IdentityProofUpdateOneInput
  auth_level: AuthLevel
}

input UserUpdateInput {
  name: String
  email: String
  id_proof: IdentityProofUpdateOneInput
  auth_level: AuthLevel
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  auth_level: AuthLevel
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  id_proof: IdentityProofWhereInput
  auth_level: AuthLevel
  auth_level_not: AuthLevel
  auth_level_in: [AuthLevel!]
  auth_level_not_in: [AuthLevel!]
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`