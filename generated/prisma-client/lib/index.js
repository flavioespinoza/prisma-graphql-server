"use strict";
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.
exports.__esModule = true;
var Query_1 = require("./Query");
var Attribute_1 = require("./Attribute");
var TaxId_1 = require("./TaxId");
var User_1 = require("./User");
var IdentityProof_1 = require("./IdentityProof");
var Email_1 = require("./Email");
var PhoneNumber_1 = require("./PhoneNumber");
var AttributeConnection_1 = require("./AttributeConnection");
var PageInfo_1 = require("./PageInfo");
var AttributeEdge_1 = require("./AttributeEdge");
var AggregateAttribute_1 = require("./AggregateAttribute");
var TaxIdConnection_1 = require("./TaxIdConnection");
var TaxIdEdge_1 = require("./TaxIdEdge");
var AggregateTaxId_1 = require("./AggregateTaxId");
var IdentityProofConnection_1 = require("./IdentityProofConnection");
var IdentityProofEdge_1 = require("./IdentityProofEdge");
var AggregateIdentityProof_1 = require("./AggregateIdentityProof");
var PhoneNumberConnection_1 = require("./PhoneNumberConnection");
var PhoneNumberEdge_1 = require("./PhoneNumberEdge");
var AggregatePhoneNumber_1 = require("./AggregatePhoneNumber");
var UserConnection_1 = require("./UserConnection");
var UserEdge_1 = require("./UserEdge");
var AggregateUser_1 = require("./AggregateUser");
var EmailConnection_1 = require("./EmailConnection");
var EmailEdge_1 = require("./EmailEdge");
var AggregateEmail_1 = require("./AggregateEmail");
var Mutation_1 = require("./Mutation");
var BatchPayload_1 = require("./BatchPayload");
var Subscription_1 = require("./Subscription");
var AttributeSubscriptionPayload_1 = require("./AttributeSubscriptionPayload");
var AttributePreviousValues_1 = require("./AttributePreviousValues");
var TaxIdSubscriptionPayload_1 = require("./TaxIdSubscriptionPayload");
var TaxIdPreviousValues_1 = require("./TaxIdPreviousValues");
var IdentityProofSubscriptionPayload_1 = require("./IdentityProofSubscriptionPayload");
var IdentityProofPreviousValues_1 = require("./IdentityProofPreviousValues");
var PhoneNumberSubscriptionPayload_1 = require("./PhoneNumberSubscriptionPayload");
var PhoneNumberPreviousValues_1 = require("./PhoneNumberPreviousValues");
var UserSubscriptionPayload_1 = require("./UserSubscriptionPayload");
var UserPreviousValues_1 = require("./UserPreviousValues");
var EmailSubscriptionPayload_1 = require("./EmailSubscriptionPayload");
var EmailPreviousValues_1 = require("./EmailPreviousValues");
exports.resolvers = {
    Query: Query_1.Query,
    Attribute: Attribute_1.Attribute,
    TaxId: TaxId_1.TaxId,
    User: User_1.User,
    IdentityProof: IdentityProof_1.IdentityProof,
    Email: Email_1.Email,
    PhoneNumber: PhoneNumber_1.PhoneNumber,
    AttributeConnection: AttributeConnection_1.AttributeConnection,
    PageInfo: PageInfo_1.PageInfo,
    AttributeEdge: AttributeEdge_1.AttributeEdge,
    AggregateAttribute: AggregateAttribute_1.AggregateAttribute,
    TaxIdConnection: TaxIdConnection_1.TaxIdConnection,
    TaxIdEdge: TaxIdEdge_1.TaxIdEdge,
    AggregateTaxId: AggregateTaxId_1.AggregateTaxId,
    IdentityProofConnection: IdentityProofConnection_1.IdentityProofConnection,
    IdentityProofEdge: IdentityProofEdge_1.IdentityProofEdge,
    AggregateIdentityProof: AggregateIdentityProof_1.AggregateIdentityProof,
    PhoneNumberConnection: PhoneNumberConnection_1.PhoneNumberConnection,
    PhoneNumberEdge: PhoneNumberEdge_1.PhoneNumberEdge,
    AggregatePhoneNumber: AggregatePhoneNumber_1.AggregatePhoneNumber,
    UserConnection: UserConnection_1.UserConnection,
    UserEdge: UserEdge_1.UserEdge,
    AggregateUser: AggregateUser_1.AggregateUser,
    EmailConnection: EmailConnection_1.EmailConnection,
    EmailEdge: EmailEdge_1.EmailEdge,
    AggregateEmail: AggregateEmail_1.AggregateEmail,
    Mutation: Mutation_1.Mutation,
    BatchPayload: BatchPayload_1.BatchPayload,
    Subscription: Subscription_1.Subscription,
    AttributeSubscriptionPayload: AttributeSubscriptionPayload_1.AttributeSubscriptionPayload,
    AttributePreviousValues: AttributePreviousValues_1.AttributePreviousValues,
    TaxIdSubscriptionPayload: TaxIdSubscriptionPayload_1.TaxIdSubscriptionPayload,
    TaxIdPreviousValues: TaxIdPreviousValues_1.TaxIdPreviousValues,
    IdentityProofSubscriptionPayload: IdentityProofSubscriptionPayload_1.IdentityProofSubscriptionPayload,
    IdentityProofPreviousValues: IdentityProofPreviousValues_1.IdentityProofPreviousValues,
    PhoneNumberSubscriptionPayload: PhoneNumberSubscriptionPayload_1.PhoneNumberSubscriptionPayload,
    PhoneNumberPreviousValues: PhoneNumberPreviousValues_1.PhoneNumberPreviousValues,
    UserSubscriptionPayload: UserSubscriptionPayload_1.UserSubscriptionPayload,
    UserPreviousValues: UserPreviousValues_1.UserPreviousValues,
    EmailSubscriptionPayload: EmailSubscriptionPayload_1.EmailSubscriptionPayload,
    EmailPreviousValues: EmailPreviousValues_1.EmailPreviousValues
};
