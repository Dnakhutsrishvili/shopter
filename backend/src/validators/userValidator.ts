export function validateCreateUser(body: any): string[] {
  const errors: string[] = [];

  if (!body || typeof body !== "object") {
    return ["Request body must be an object"];
  }

  if (
    typeof body.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
  ) {
    errors.push("email must be a valid email");
  }

  if (!["guest", "user", "admin"].includes(body.role)) {
    errors.push("role must be guest, user, or admin");
  }

  if (!body.profile || typeof body.profile !== "object") {
    errors.push("profile is required");
  } else {
    if (
      typeof body.profile.firstName !== "string" ||
      body.profile.firstName.trim() === ""
    ) {
      errors.push("profile.firstName is required");
    }

    if (
      typeof body.profile.lastName !== "string" ||
      body.profile.lastName.trim() === ""
    ) {
      errors.push("profile.lastName is required");
    }

    if (
      body.profile.avatarUrl !== undefined &&
      typeof body.profile.avatarUrl !== "string"
    ) {
      errors.push("profile.avatarUrl must be a string");
    }
  }

  if (typeof body.isAuthenticated !== "boolean") {
    errors.push("isAuthenticated must be boolean");
  }

  if (body.addresses !== undefined) {
    if (!Array.isArray(body.addresses)) {
      errors.push("addresses must be an array");
    } else {
      body.addresses.forEach((addr: any, index: number) => {
        if (typeof addr.id !== "string") {
          errors.push(`addresses[${index}].id is required`);
        }
        if (typeof addr.city !== "string") {
          errors.push(`addresses[${index}].city is required`);
        }
        if (typeof addr.street !== "string") {
          errors.push(`addresses[${index}].street is required`);
        }
        if (typeof addr.postalCode !== "string") {
          errors.push(`addresses[${index}].postalCode is required`);
        }
      });
    }
  }

  if (body.preferences !== undefined) {
    if (typeof body.preferences !== "object") {
      errors.push("preferences must be an object");
    } else {
      if (typeof body.preferences.language !== "string") {
        errors.push("preferences.language is required");
      }
      if (typeof body.preferences.currency !== "string") {
        errors.push("preferences.currency is required");
      }
      if (!["light", "dark"].includes(body.preferences.theme)) {
        errors.push("preferences.theme must be light or dark");
      }
    }
  }

  return errors;
}
