/**
 * This file was automatically generated by nexus-prisma@0.3.7
 * Do not make changes to this file directly
 */

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '../prisma-client'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
      Query: QueryObject
      User: UserObject
      UserConnection: UserConnectionObject
      PageInfo: PageInfoObject
      UserEdge: UserEdgeObject
      AggregateUser: AggregateUserObject
      Mutation: MutationObject
      BatchPayload: BatchPayloadObject
      Subscription: SubscriptionObject
      UserSubscriptionPayload: UserSubscriptionPayloadObject
      UserPreviousValues: UserPreviousValuesObject
    }
    fieldsDetails: {
      Query: QueryFieldDetails
      User: UserFieldDetails
      UserConnection: UserConnectionFieldDetails
      PageInfo: PageInfoFieldDetails
      UserEdge: UserEdgeFieldDetails
      AggregateUser: AggregateUserFieldDetails
      Mutation: MutationFieldDetails
      BatchPayload: BatchPayloadFieldDetails
      Subscription: SubscriptionFieldDetails
      UserSubscriptionPayload: UserSubscriptionPayloadFieldDetails
      UserPreviousValues: UserPreviousValuesFieldDetails
    }
  }
  inputTypes: {
    fields: {
      UserWhereUniqueInput: UserWhereUniqueInputInputObject
      UserWhereInput: UserWhereInputInputObject
      UserCreateInput: UserCreateInputInputObject
      UserUpdateInput: UserUpdateInputInputObject
      UserUpdateManyMutationInput: UserUpdateManyMutationInputInputObject
      UserSubscriptionWhereInput: UserSubscriptionWhereInputInputObject
    }
  }
  enumTypes: {
    UserOrderByInput: UserOrderByInputValues,
    MutationType: MutationTypeValues,
  }
}

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'user', args?: QueryUserArgs[] | false, alias?: string  } 
  | { name: 'users', args?: QueryUsersArgs[] | false, alias?: string  } 
  | { name: 'usersConnection', args?: QueryUsersConnectionArgs[] | false, alias?: string  } 

type QueryFields =
  | 'user'
  | 'users'
  | 'usersConnection'


type QueryUserArgs =
  | 'where'
type QueryUsersArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryUsersConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface QueryFieldDetails {
  user: {
    type: 'User'
    args: Record<QueryUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  users: {
    type: 'User'
    args: Record<QueryUsersArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: UserWhereInput | null, orderBy?: prisma.UserOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User[]> | prisma.User[]
  }
  usersConnection: {
    type: 'UserConnection'
    args: Record<QueryUsersConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: UserWhereInput | null, orderBy?: prisma.UserOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserConnection> | prisma.UserConnection
  }
}
  

// Types for User

type UserObject =
  | UserFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'email', args?: [] | false, alias?: string  } 
  | { name: 'phoneNumber', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'address', args?: [] | false, alias?: string  } 
  | { name: 'birthDate', args?: [] | false, alias?: string  } 

type UserFields =
  | 'id'
  | 'email'
  | 'phoneNumber'
  | 'name'
  | 'address'
  | 'birthDate'



  

export interface UserFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  email: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  phoneNumber: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  address: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  birthDate: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for UserConnection

type UserConnectionObject =
  | UserConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type UserConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface UserConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'UserEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserEdge[]> | prisma.UserEdge[]
  }
  aggregate: {
    type: 'AggregateUser'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateUser> | prisma.AggregateUser
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails {
  hasNextPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  hasPreviousPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  startCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  endCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for UserEdge

type UserEdgeObject =
  | UserEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type UserEdgeFields =
  | 'node'
  | 'cursor'



  

export interface UserEdgeFieldDetails {
  node: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateUser

type AggregateUserObject =
  | AggregateUserFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateUserFields =
  | 'count'



  

export interface AggregateUserFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createUser', args?: MutationCreateUserArgs[] | false, alias?: string  } 
  | { name: 'updateUser', args?: MutationUpdateUserArgs[] | false, alias?: string  } 
  | { name: 'updateManyUsers', args?: MutationUpdateManyUsersArgs[] | false, alias?: string  } 
  | { name: 'upsertUser', args?: MutationUpsertUserArgs[] | false, alias?: string  } 
  | { name: 'deleteUser', args?: MutationDeleteUserArgs[] | false, alias?: string  } 
  | { name: 'deleteManyUsers', args?: MutationDeleteManyUsersArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createUser'
  | 'updateUser'
  | 'updateManyUsers'
  | 'upsertUser'
  | 'deleteUser'
  | 'deleteManyUsers'


type MutationCreateUserArgs =
  | 'data'
type MutationUpdateUserArgs =
  | 'data'
  | 'where'
type MutationUpdateManyUsersArgs =
  | 'data'
  | 'where'
type MutationUpsertUserArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteUserArgs =
  | 'where'
type MutationDeleteManyUsersArgs =
  | 'where'
  

export interface MutationFieldDetails {
  createUser: {
    type: 'User'
    args: Record<MutationCreateUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  updateUser: {
    type: 'User'
    args: Record<MutationUpdateUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserUpdateInput, where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  updateManyUsers: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyUsersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertUser: {
    type: 'User'
    args: Record<MutationUpsertUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  deleteUser: {
    type: 'User'
    args: Record<MutationDeleteUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  deleteManyUsers: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyUsersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: UserWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails {
  count: {
    type: 'Long'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'user', args?: SubscriptionUserArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'user'


type SubscriptionUserArgs =
  | 'where'
  

export interface SubscriptionFieldDetails {
  user: {
    type: 'UserSubscriptionPayload'
    args: Record<SubscriptionUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: UserSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserSubscriptionPayload | null> | prisma.UserSubscriptionPayload | null
  }
}
  

// Types for UserSubscriptionPayload

type UserSubscriptionPayloadObject =
  | UserSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type UserSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface UserSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'UserPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserPreviousValues | null> | prisma.UserPreviousValues | null
  }
}
  

// Types for UserPreviousValues

type UserPreviousValuesObject =
  | UserPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'email', args?: [] | false, alias?: string  } 
  | { name: 'phoneNumber', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'address', args?: [] | false, alias?: string  } 
  | { name: 'birthDate', args?: [] | false, alias?: string  } 

type UserPreviousValuesFields =
  | 'id'
  | 'email'
  | 'phoneNumber'
  | 'name'
  | 'address'
  | 'birthDate'



  

export interface UserPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  email: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  phoneNumber: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  address: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  birthDate: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  


export interface UserWhereUniqueInput {
  id?: string | null
  email?: string | null
}
export type UserWhereUniqueInputInputObject =
  | Extract<keyof UserWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'email', alias?: string  } 
  
export interface UserWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  email?: string | null
  email_not?: string | null
  email_in?: string[]
  email_not_in?: string[]
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  phoneNumber?: string | null
  phoneNumber_not?: string | null
  phoneNumber_in?: string[]
  phoneNumber_not_in?: string[]
  phoneNumber_lt?: string | null
  phoneNumber_lte?: string | null
  phoneNumber_gt?: string | null
  phoneNumber_gte?: string | null
  phoneNumber_contains?: string | null
  phoneNumber_not_contains?: string | null
  phoneNumber_starts_with?: string | null
  phoneNumber_not_starts_with?: string | null
  phoneNumber_ends_with?: string | null
  phoneNumber_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  address?: string | null
  address_not?: string | null
  address_in?: string[]
  address_not_in?: string[]
  address_lt?: string | null
  address_lte?: string | null
  address_gt?: string | null
  address_gte?: string | null
  address_contains?: string | null
  address_not_contains?: string | null
  address_starts_with?: string | null
  address_not_starts_with?: string | null
  address_ends_with?: string | null
  address_not_ends_with?: string | null
  birthDate?: string | null
  birthDate_not?: string | null
  birthDate_in?: string[]
  birthDate_not_in?: string[]
  birthDate_lt?: string | null
  birthDate_lte?: string | null
  birthDate_gt?: string | null
  birthDate_gte?: string | null
  birthDate_contains?: string | null
  birthDate_not_contains?: string | null
  birthDate_starts_with?: string | null
  birthDate_not_starts_with?: string | null
  birthDate_ends_with?: string | null
  birthDate_not_ends_with?: string | null
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
}
export type UserWhereInputInputObject =
  | Extract<keyof UserWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'email_not', alias?: string  } 
  | { name: 'email_in', alias?: string  } 
  | { name: 'email_not_in', alias?: string  } 
  | { name: 'email_lt', alias?: string  } 
  | { name: 'email_lte', alias?: string  } 
  | { name: 'email_gt', alias?: string  } 
  | { name: 'email_gte', alias?: string  } 
  | { name: 'email_contains', alias?: string  } 
  | { name: 'email_not_contains', alias?: string  } 
  | { name: 'email_starts_with', alias?: string  } 
  | { name: 'email_not_starts_with', alias?: string  } 
  | { name: 'email_ends_with', alias?: string  } 
  | { name: 'email_not_ends_with', alias?: string  } 
  | { name: 'phoneNumber', alias?: string  } 
  | { name: 'phoneNumber_not', alias?: string  } 
  | { name: 'phoneNumber_in', alias?: string  } 
  | { name: 'phoneNumber_not_in', alias?: string  } 
  | { name: 'phoneNumber_lt', alias?: string  } 
  | { name: 'phoneNumber_lte', alias?: string  } 
  | { name: 'phoneNumber_gt', alias?: string  } 
  | { name: 'phoneNumber_gte', alias?: string  } 
  | { name: 'phoneNumber_contains', alias?: string  } 
  | { name: 'phoneNumber_not_contains', alias?: string  } 
  | { name: 'phoneNumber_starts_with', alias?: string  } 
  | { name: 'phoneNumber_not_starts_with', alias?: string  } 
  | { name: 'phoneNumber_ends_with', alias?: string  } 
  | { name: 'phoneNumber_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'address', alias?: string  } 
  | { name: 'address_not', alias?: string  } 
  | { name: 'address_in', alias?: string  } 
  | { name: 'address_not_in', alias?: string  } 
  | { name: 'address_lt', alias?: string  } 
  | { name: 'address_lte', alias?: string  } 
  | { name: 'address_gt', alias?: string  } 
  | { name: 'address_gte', alias?: string  } 
  | { name: 'address_contains', alias?: string  } 
  | { name: 'address_not_contains', alias?: string  } 
  | { name: 'address_starts_with', alias?: string  } 
  | { name: 'address_not_starts_with', alias?: string  } 
  | { name: 'address_ends_with', alias?: string  } 
  | { name: 'address_not_ends_with', alias?: string  } 
  | { name: 'birthDate', alias?: string  } 
  | { name: 'birthDate_not', alias?: string  } 
  | { name: 'birthDate_in', alias?: string  } 
  | { name: 'birthDate_not_in', alias?: string  } 
  | { name: 'birthDate_lt', alias?: string  } 
  | { name: 'birthDate_lte', alias?: string  } 
  | { name: 'birthDate_gt', alias?: string  } 
  | { name: 'birthDate_gte', alias?: string  } 
  | { name: 'birthDate_contains', alias?: string  } 
  | { name: 'birthDate_not_contains', alias?: string  } 
  | { name: 'birthDate_starts_with', alias?: string  } 
  | { name: 'birthDate_not_starts_with', alias?: string  } 
  | { name: 'birthDate_ends_with', alias?: string  } 
  | { name: 'birthDate_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface UserCreateInput {
  id?: string | null
  email?: string | null
  phoneNumber?: string
  name?: string
  address?: string
  birthDate?: string
}
export type UserCreateInputInputObject =
  | Extract<keyof UserCreateInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'phoneNumber', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'address', alias?: string  } 
  | { name: 'birthDate', alias?: string  } 
  
export interface UserUpdateInput {
  email?: string | null
  phoneNumber?: string | null
  name?: string | null
  address?: string | null
  birthDate?: string | null
}
export type UserUpdateInputInputObject =
  | Extract<keyof UserUpdateInput, string>
  | { name: 'email', alias?: string  } 
  | { name: 'phoneNumber', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'address', alias?: string  } 
  | { name: 'birthDate', alias?: string  } 
  
export interface UserUpdateManyMutationInput {
  email?: string | null
  phoneNumber?: string | null
  name?: string | null
  address?: string | null
  birthDate?: string | null
}
export type UserUpdateManyMutationInputInputObject =
  | Extract<keyof UserUpdateManyMutationInput, string>
  | { name: 'email', alias?: string  } 
  | { name: 'phoneNumber', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'address', alias?: string  } 
  | { name: 'birthDate', alias?: string  } 
  
export interface UserSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: UserWhereInput | null
  AND?: UserSubscriptionWhereInput[]
  OR?: UserSubscriptionWhereInput[]
  NOT?: UserSubscriptionWhereInput[]
}
export type UserSubscriptionWhereInputInputObject =
  | Extract<keyof UserSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  

export type UserOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'phoneNumber_ASC'
  | 'phoneNumber_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'address_ASC'
  | 'address_DESC'
  | 'birthDate_ASC'
  | 'birthDate_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type MutationTypeValues =
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  
  