/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPet = /* GraphQL */ `
  query GetPet($id: ID!) {
    getPet(id: $id) {
      id
      petName
      petSpecies
      petBreed
      petGender
      petDesc
      lastSeen
      image
      certificateNo
      isCertified
      lostPet {
        items {
          id
          lastSeenLocation
          lastSeenDate
          description
          reward
          foundStatus
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPets = /* GraphQL */ `
  query ListPets(
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        petName
        petSpecies
        petBreed
        petGender
        petDesc
        lastSeen
        image
        certificateNo
        isCertified
        lostPet {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLostPet = /* GraphQL */ `
  query GetLostPet($id: ID!) {
    getLostPet(id: $id) {
      id
      lastSeenLocation
      lastSeenDate
      description
      reward
      foundStatus
      pet {
        id
        petName
        petSpecies
        petBreed
        petGender
        petDesc
        lastSeen
        image
        certificateNo
        isCertified
        lostPet {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLostPets = /* GraphQL */ `
  query ListLostPets(
    $filter: ModelLostPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLostPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lastSeenLocation
        lastSeenDate
        description
        reward
        foundStatus
        pet {
          id
          petName
          petSpecies
          petBreed
          petGender
          petDesc
          lastSeen
          image
          certificateNo
          isCertified
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
