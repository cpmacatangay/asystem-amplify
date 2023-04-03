/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNotice = /* GraphQL */ `
  subscription OnCreateNotice(
    $filter: ModelSubscriptionNoticeFilterInput
    $owner: String
  ) {
    onCreateNotice(filter: $filter, owner: $owner) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateNotice = /* GraphQL */ `
  subscription OnUpdateNotice(
    $filter: ModelSubscriptionNoticeFilterInput
    $owner: String
  ) {
    onUpdateNotice(filter: $filter, owner: $owner) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteNotice = /* GraphQL */ `
  subscription OnDeleteNotice(
    $filter: ModelSubscriptionNoticeFilterInput
    $owner: String
  ) {
    onDeleteNotice(filter: $filter, owner: $owner) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateFacility = /* GraphQL */ `
  subscription OnCreateFacility(
    $filter: ModelSubscriptionFacilityFilterInput
    $owner: String
  ) {
    onCreateFacility(filter: $filter, owner: $owner) {
      id
      facilityId
      equipmentNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFacility = /* GraphQL */ `
  subscription OnUpdateFacility(
    $filter: ModelSubscriptionFacilityFilterInput
    $owner: String
  ) {
    onUpdateFacility(filter: $filter, owner: $owner) {
      id
      facilityId
      equipmentNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFacility = /* GraphQL */ `
  subscription OnDeleteFacility(
    $filter: ModelSubscriptionFacilityFilterInput
    $owner: String
  ) {
    onDeleteFacility(filter: $filter, owner: $owner) {
      id
      facilityId
      equipmentNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      userId
      emailAddress
      passWord
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      userId
      emailAddress
      passWord
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      userId
      emailAddress
      passWord
      createdAt
      updatedAt
      owner
    }
  }
`;
