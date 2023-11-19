#ifdef AE2F_MAP
void ae2f_Map_init(struct ae2f_Map* i) {
	i->pre = 0;
	i->next = 0;
	i->hV = 0;
	i->first = i;
	i->end = i;
}

struct ae2f_Map* ae2f_Map_pop(struct ae2f_Map* _this) {
	struct ae2f_Map* ed = _this->end;
	switch (_this->end == _this->first)
	{
	case 0:
		free(_this->end->kv.key.c);
		free(_this->end->kv.value.c);
		_this->end = _this->end->pre;
		free(_this->end->next);
		_this->end->next = 0;

		return _this->end;
	default:
		return 0;
	}

}

void ae2f_Map_free(struct ae2f_Map* _this) {
	switch ((unsigned long long)ae2f_Map_pop(_this))
	{
	case 0: return;
	default: return ae2f_Map_free(_this);
	}
}

struct ae2f_Map* ae2f_Map_visit(struct ae2f_Map* _this, struct ae2f_Dynamic key) {
	struct ae2f_Map* it = _this->hV ? _this : _this->next;
	while (it && it->hV) {
		switch (!ae2f_Dynamic_nEqual(it->kv.key, key))
		{
		case 1: return it;
		default:
			it = it->next;
			break;
		}
	}

	return it;
}

void ae2f_Map_add(struct ae2f_Map* _this, struct ae2f_Dynamic key, struct ae2f_Dynamic value) {
	switch ((int)ae2f_Map_visit(_this, key))
	{
	case 0:
		_this->end->next = (struct ae2f_Map*)malloc(sizeof(struct ae2f_Map));
		_this->end->next->pre = _this->end;
		_this->end = _this->end->next;


		_this->end->first = _this->first;
		_this->end->next = 0;
		_this->end->end = _this->end;
		_this->end->kv.key = ae2f_Dynamic_copy(key);
		_this->end->kv.value = ae2f_Dynamic_copy(value);
		_this->end->hV = 1;
	default:
		return;
	}
}

void ae2f_Map_add_(struct ae2f_Map* _this, struct ae2f_Pair pair) {
	return ae2f_Map_add(_this, pair.key, pair.value);
}

struct ae2f_Dynamic ae2f_Map_at(struct ae2f_Map* _this, struct ae2f_Dynamic key) {
	return ae2f_Map_visit(_this, key)->kv.value;
}
#endif // AE2F_MAP
