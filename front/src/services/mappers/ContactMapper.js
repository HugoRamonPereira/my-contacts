class ContactMapper {
  toPersistence(domainContact) {
    return {
      id: domainContact.id,
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      category_id: domainContact.categoryId,
    };
  }

  toDomain(persistanceContact) {
    return {
      id: persistanceContact.id,
      name: persistanceContact.name,
      email: persistanceContact.email,
      phone: persistanceContact.phone,
      category: {
        id: persistanceContact.category_id,
        name: persistanceContact.category_name,
      },
    };
  }
}

export default new ContactMapper();
