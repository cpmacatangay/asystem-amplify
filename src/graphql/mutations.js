/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNotice = /* GraphQL */ `
  mutation CreateNotice(
    $input: CreateNoticeInput!
    $condition: ModelNoticeConditionInput
  ) {
    createNotice(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateNotice = /* GraphQL */ `
  mutation UpdateNotice(
    $input: UpdateNoticeInput!
    $condition: ModelNoticeConditionInput
  ) {
    updateNotice(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteNotice = /* GraphQL */ `
  mutation DeleteNotice(
    $input: DeleteNoticeInput!
    $condition: ModelNoticeConditionInput
  ) {
    deleteNotice(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createFacility = /* GraphQL */ `
  mutation CreateFacility(
    $input: CreateFacilityInput!
    $condition: ModelFacilityConditionInput
  ) {
    createFacility(input: $input, condition: $condition) {
      id
      facilityId
      equipmentNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateFacility = /* GraphQL */ `
  mutation UpdateFacility(
    $input: UpdateFacilityInput!
    $condition: ModelFacilityConditionInput
  ) {
    updateFacility(input: $input, condition: $condition) {
      id
      facilityId
      equipmentNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFacility = /* GraphQL */ `
  mutation DeleteFacility(
    $input: DeleteFacilityInput!
    $condition: ModelFacilityConditionInput
  ) {
    deleteFacility(input: $input, condition: $condition) {
      id
      facilityId
      equipmentNumber
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
