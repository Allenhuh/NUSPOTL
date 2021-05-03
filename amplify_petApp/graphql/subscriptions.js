/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePet = /* GraphQL */ `
  subscription OnCreatePet {
    onCreatePet {
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
export const onUpdatePet = /* GraphQL */ `
  subscription OnUpdatePet {
    onUpdatePet {
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
export const onDeletePet = /* GraphQL */ `
  subscription OnDeletePet {
    onDeletePet {
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
export const onCreateLostPet = /* GraphQL */ `
  subscription OnCreateLostPet {
    onCreateLostPet {
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
export const onUpdateLostPet = /* GraphQL */ `
  subscription OnUpdateLostPet {
    onUpdateLostPet {
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
export const onDeleteLostPet = /* GraphQL */ `
  subscription OnDeleteLostPet {
    onDeleteLostPet {
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
