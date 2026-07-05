# DECISIONS

## State Management

Redux Toolkit with createEntityAdapter was used to manage normalized task state efficiently.

## Data Normalization

The API returns inconsistent data formats. A dedicated normalize.ts layer converts raw payloads into strongly typed Task objects.

## Real-Time Updates

WebSocket integration was implemented to receive live task updates without requiring page refreshes.

## Streaming Summary

AI summaries are streamed incrementally and rendered in the detail panel.

## Security

Markdown content is sanitized using rehype-sanitize before rendering to prevent XSS attacks.

## Pagination, Search and Filters

Filtering, sorting, searching and pagination are handled through Redux state and selectors.

## Testing

Jest was used for unit testing normalization logic and selectors.

## Future Improvements

- IndexedDB caching with localforage
- Virtualized task list for large datasets
- Additional integration tests