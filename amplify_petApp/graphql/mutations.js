/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPet = /* GraphQL */ `
  mutation CreatePet(
    $input: CreatePetInput!
    $condition: ModelPetConditionInput
  ) {
    createPet(input: $input, condition: $condition) {
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
export const updatePet = /* GraphQL */ `
  mutation UpdatePet(
    $input: UpdatePetInput!
    $condition: ModelPetConditionInput
  ) {
    updatePet(input: $input, condition: $condition) {
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
export const deletePet = /* GraphQL */ `
  mutation DeletePet(
    $input: DeletePetInput!
    $condition: ModelPetConditionInput
  ) {
    deletePet(input: $input, condition: $condition) {
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
export const createLostPet = /* GraphQL */ `
  mutation CreateLostPet(
    $input: CreateLostPetInput!
    $condition: ModelLostPetConditionInput
  ) {
    createLostPet(input: $input, condition: $condition) {
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
export const updateLostPet = /* GraphQL */ `
  mutation UpdateLostPet(
    $input: UpdateLostPetInput!
    $condition: ModelLostPetConditionInput
  ) {
    updateLostPet(input: $input, condition: $condition) {
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
export const deleteLostPet = /* GraphQL */ `
  mutation DeleteLostPet(
    $input: DeleteLostPetInput!
    $condition: ModelLostPetConditionInput
  ) {
    deleteLostPet(input: $input, condition: $condition) {
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
