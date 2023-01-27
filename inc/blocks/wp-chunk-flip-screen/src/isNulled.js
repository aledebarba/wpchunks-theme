
export function isNulled(value) {
    return value === undefined || value === null || value === "";
}

export function isntNulled(value) {
    return !isNulled(value);
}

export function isNulledOrEmpty(value) {
    return isNulled(value) || value === "";
}

export function notNulledOrEmpty(value) {
    return !isNulledOrEmpty(value);
}

