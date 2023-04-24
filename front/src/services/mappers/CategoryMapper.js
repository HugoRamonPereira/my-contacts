class CategoryMapper {
  toDomain(persistanceCategory) {
    return {
      id: persistanceCategory.id,
      name: persistanceCategory.name,
    };
  }
}

export default new CategoryMapper();
