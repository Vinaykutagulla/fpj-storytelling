// Simple structured logger (server-side only)
// Usage: logger.info('message', { meta })

interface LogFields {
  level: 'info' | 'warn' | 'error';
  msg: string;
  [key: string]: any;
}

function emit(fields: LogFields) {
  const base = {
    ts: new Date().toISOString(),
    ...fields
  };
  try {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(base));
  } catch {
    // ignore serialization errors
  }
}

export const logger = {
  info(msg: string, extra?: Record<string, any>) { emit({ level: 'info', msg, ...extra }); },
  warn(msg: string, extra?: Record<string, any>) { emit({ level: 'warn', msg, ...extra }); },
  error(msg: string, extra?: Record<string, any>) { emit({ level: 'error', msg, ...extra }); }
};
