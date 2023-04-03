/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNotice = /* GraphQL */ `
  query GetNotice($id: ID!) {
    getNotice(id: $id) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNotices = /* GraphQL */ `
  query ListNotices(
    $filter: ModelNoticeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getFacility = /* GraphQL */ `
  query GetFacility($id: ID!) {
    getFacility(id: $id) {
      id
      facilityId
      equipmentNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFacilities = /* GraphQL */ `
  query ListFacilities(
    $filter: ModelFacilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        facilityId
        equipmentNumber
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        emailAddress
        passWord
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
