#ifdef AE2F_CONTEXT
struct ae2f_Context* ae2f_Context_init(struct ae2f_Context* _this) { _this->end = _this, _this->nxt = 0; return _this; }

void* ae2f_Context_malloc(struct ae2f_Context* _this, unsigned long long len) {
	_this->end = _this->end->nxt = ae2f_Context_init((struct ae2f_Dynamic*)malloc(sizeof(struct ae2f_Dynamic)));
	_this->end->c = ae2f_Dynamic_init(len);
	return _this->end->c.c;
}
struct ae2f_Context ae2f_Context_free_(struct ae2f_Context this_) {
	void* d;
	struct ae2f_Context _this = this_;
	for (struct ae2f_Context* c = _this.nxt; c != 0; c = d) {
		// printf("del: %p, %p\n", c->c.c, c);
		free(c->c.c); d = c->nxt; free(c);
	} _this.end = &_this, _this.nxt = 0; return _this;
}

void ae2f_Context_free(struct ae2f_Context* _this) {
	*_this = ae2f_Context_free_(*_this);
	ae2f_Context_init(_this);
}
#endif // AE2F_CONTEXT