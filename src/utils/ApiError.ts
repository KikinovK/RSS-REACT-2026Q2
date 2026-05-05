const STATUS_MESSAGES: Record<number, string> = {
  400: 'Bad request. Please check your search query.',
  401: 'Unauthorized. Please check your credentials.',
  403: 'Access forbidden.',
  404: 'Not found. The requested resource does not exist.',
  429: 'Too many requests. Please wait a moment and try again.',
  500: 'Server error. Please try again later.',
  502: 'Bad gateway. The server is temporarily unavailable.',
  503: 'Service unavailable. Please try again later.',
};

export class ApiError extends Error {
  status: number;

  constructor(status: number, context?: string) {
    const base = STATUS_MESSAGES[status] ?? `Unexpected error (${status}).`;
    super(context ? `${context}: ${base}` : base);
    this.name = 'ApiError';
    this.status = status;
  }
}
