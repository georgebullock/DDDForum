type ResponseContent = {
  statusCode: number;
  error: string;
  data: unknown;
  success: boolean;
};

class ApiError extends Error {
  content: ResponseContent;

  constructor(content: ResponseContent) {
    super();
    this.content = content;

    Object.setPrototypeOf(this, ApiError.prototype);
  }

  getError() {
    return { ...this.content };
  }
}

export default ApiError;
