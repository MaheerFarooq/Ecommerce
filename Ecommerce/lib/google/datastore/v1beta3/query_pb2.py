# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/datastore/v1beta3/query.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.datastore.v1beta3 import entity_pb2 as google_dot_datastore_dot_v1beta3_dot_entity__pb2
from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='google/datastore/v1beta3/query.proto',
  package='google.datastore.v1beta3',
  syntax='proto3',
  serialized_pb=_b('\n$google/datastore/v1beta3/query.proto\x12\x18google.datastore.v1beta3\x1a\x1cgoogle/api/annotations.proto\x1a%google/datastore/v1beta3/entity.proto\x1a\x1egoogle/protobuf/wrappers.proto\"\xa3\x01\n\x0c\x45ntityResult\x12\x30\n\x06\x65ntity\x18\x01 \x01(\x0b\x32 .google.datastore.v1beta3.Entity\x12\x0e\n\x06\x63ursor\x18\x03 \x01(\x0c\"Q\n\nResultType\x12\x1b\n\x17RESULT_TYPE_UNSPECIFIED\x10\x00\x12\x08\n\x04\x46ULL\x10\x01\x12\x0e\n\nPROJECTION\x10\x02\x12\x0c\n\x08KEY_ONLY\x10\x03\"\x8b\x03\n\x05Query\x12\x38\n\nprojection\x18\x02 \x03(\x0b\x32$.google.datastore.v1beta3.Projection\x12\x36\n\x04kind\x18\x03 \x03(\x0b\x32(.google.datastore.v1beta3.KindExpression\x12\x30\n\x06\x66ilter\x18\x04 \x01(\x0b\x32 .google.datastore.v1beta3.Filter\x12\x36\n\x05order\x18\x05 \x03(\x0b\x32\'.google.datastore.v1beta3.PropertyOrder\x12@\n\x0b\x64istinct_on\x18\x06 \x03(\x0b\x32+.google.datastore.v1beta3.PropertyReference\x12\x14\n\x0cstart_cursor\x18\x07 \x01(\x0c\x12\x12\n\nend_cursor\x18\x08 \x01(\x0c\x12\x0e\n\x06offset\x18\n \x01(\x05\x12*\n\x05limit\x18\x0c \x01(\x0b\x32\x1b.google.protobuf.Int32Value\"\x1e\n\x0eKindExpression\x12\x0c\n\x04name\x18\x01 \x01(\t\"!\n\x11PropertyReference\x12\x0c\n\x04name\x18\x02 \x01(\t\"K\n\nProjection\x12=\n\x08property\x18\x01 \x01(\x0b\x32+.google.datastore.v1beta3.PropertyReference\"\xdb\x01\n\rPropertyOrder\x12=\n\x08property\x18\x01 \x01(\x0b\x32+.google.datastore.v1beta3.PropertyReference\x12\x44\n\tdirection\x18\x02 \x01(\x0e\x32\x31.google.datastore.v1beta3.PropertyOrder.Direction\"E\n\tDirection\x12\x19\n\x15\x44IRECTION_UNSPECIFIED\x10\x00\x12\r\n\tASCENDING\x10\x01\x12\x0e\n\nDESCENDING\x10\x02\"\xa3\x01\n\x06\x46ilter\x12\x45\n\x10\x63omposite_filter\x18\x01 \x01(\x0b\x32).google.datastore.v1beta3.CompositeFilterH\x00\x12\x43\n\x0fproperty_filter\x18\x02 \x01(\x0b\x32(.google.datastore.v1beta3.PropertyFilterH\x00\x42\r\n\x0b\x66ilter_type\"\xb3\x01\n\x0f\x43ompositeFilter\x12>\n\x02op\x18\x01 \x01(\x0e\x32\x32.google.datastore.v1beta3.CompositeFilter.Operator\x12\x31\n\x07\x66ilters\x18\x02 \x03(\x0b\x32 .google.datastore.v1beta3.Filter\"-\n\x08Operator\x12\x18\n\x14OPERATOR_UNSPECIFIED\x10\x00\x12\x07\n\x03\x41ND\x10\x01\"\xd6\x02\n\x0ePropertyFilter\x12=\n\x08property\x18\x01 \x01(\x0b\x32+.google.datastore.v1beta3.PropertyReference\x12=\n\x02op\x18\x02 \x01(\x0e\x32\x31.google.datastore.v1beta3.PropertyFilter.Operator\x12.\n\x05value\x18\x03 \x01(\x0b\x32\x1f.google.datastore.v1beta3.Value\"\x95\x01\n\x08Operator\x12\x18\n\x14OPERATOR_UNSPECIFIED\x10\x00\x12\r\n\tLESS_THAN\x10\x01\x12\x16\n\x12LESS_THAN_OR_EQUAL\x10\x02\x12\x10\n\x0cGREATER_THAN\x10\x03\x12\x19\n\x15GREATER_THAN_OR_EQUAL\x10\x04\x12\t\n\x05\x45QUAL\x10\x05\x12\x10\n\x0cHAS_ANCESTOR\x10\x0b\"\xb4\x02\n\x08GqlQuery\x12\x14\n\x0cquery_string\x18\x01 \x01(\t\x12\x16\n\x0e\x61llow_literals\x18\x02 \x01(\x08\x12M\n\x0enamed_bindings\x18\x05 \x03(\x0b\x32\x35.google.datastore.v1beta3.GqlQuery.NamedBindingsEntry\x12H\n\x13positional_bindings\x18\x04 \x03(\x0b\x32+.google.datastore.v1beta3.GqlQueryParameter\x1a\x61\n\x12NamedBindingsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12:\n\x05value\x18\x02 \x01(\x0b\x32+.google.datastore.v1beta3.GqlQueryParameter:\x02\x38\x01\"i\n\x11GqlQueryParameter\x12\x30\n\x05value\x18\x02 \x01(\x0b\x32\x1f.google.datastore.v1beta3.ValueH\x00\x12\x10\n\x06\x63ursor\x18\x03 \x01(\x0cH\x00\x42\x10\n\x0eparameter_type\"\xd3\x03\n\x10QueryResultBatch\x12\x17\n\x0fskipped_results\x18\x06 \x01(\x05\x12\x16\n\x0eskipped_cursor\x18\x03 \x01(\x0c\x12M\n\x12\x65ntity_result_type\x18\x01 \x01(\x0e\x32\x31.google.datastore.v1beta3.EntityResult.ResultType\x12>\n\x0e\x65ntity_results\x18\x02 \x03(\x0b\x32&.google.datastore.v1beta3.EntityResult\x12\x12\n\nend_cursor\x18\x04 \x01(\x0c\x12P\n\x0cmore_results\x18\x05 \x01(\x0e\x32:.google.datastore.v1beta3.QueryResultBatch.MoreResultsType\"\x98\x01\n\x0fMoreResultsType\x12!\n\x1dMORE_RESULTS_TYPE_UNSPECIFIED\x10\x00\x12\x10\n\x0cNOT_FINISHED\x10\x01\x12\x1c\n\x18MORE_RESULTS_AFTER_LIMIT\x10\x02\x12\x1d\n\x19MORE_RESULTS_AFTER_CURSOR\x10\x04\x12\x13\n\x0fNO_MORE_RESULTS\x10\x03\x42,\n\x1c\x63om.google.datastore.v1beta3B\nQueryProtoP\x01\x62\x06proto3')
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,google_dot_datastore_dot_v1beta3_dot_entity__pb2.DESCRIPTOR,google_dot_protobuf_dot_wrappers__pb2.DESCRIPTOR,])
_sym_db.RegisterFileDescriptor(DESCRIPTOR)



_ENTITYRESULT_RESULTTYPE = _descriptor.EnumDescriptor(
  name='ResultType',
  full_name='google.datastore.v1beta3.EntityResult.ResultType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='RESULT_TYPE_UNSPECIFIED', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='FULL', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='PROJECTION', index=2, number=2,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='KEY_ONLY', index=3, number=3,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=250,
  serialized_end=331,
)
_sym_db.RegisterEnumDescriptor(_ENTITYRESULT_RESULTTYPE)

_PROPERTYORDER_DIRECTION = _descriptor.EnumDescriptor(
  name='Direction',
  full_name='google.datastore.v1beta3.PropertyOrder.Direction',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='DIRECTION_UNSPECIFIED', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ASCENDING', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='DESCENDING', index=2, number=2,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=1026,
  serialized_end=1095,
)
_sym_db.RegisterEnumDescriptor(_PROPERTYORDER_DIRECTION)

_COMPOSITEFILTER_OPERATOR = _descriptor.EnumDescriptor(
  name='Operator',
  full_name='google.datastore.v1beta3.CompositeFilter.Operator',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='OPERATOR_UNSPECIFIED', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='AND', index=1, number=1,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=1398,
  serialized_end=1443,
)
_sym_db.RegisterEnumDescriptor(_COMPOSITEFILTER_OPERATOR)

_PROPERTYFILTER_OPERATOR = _descriptor.EnumDescriptor(
  name='Operator',
  full_name='google.datastore.v1beta3.PropertyFilter.Operator',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='OPERATOR_UNSPECIFIED', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='LESS_THAN', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='LESS_THAN_OR_EQUAL', index=2, number=2,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GREATER_THAN', index=3, number=3,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='GREATER_THAN_OR_EQUAL', index=4, number=4,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='EQUAL', index=5, number=5,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='HAS_ANCESTOR', index=6, number=11,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=1639,
  serialized_end=1788,
)
_sym_db.RegisterEnumDescriptor(_PROPERTYFILTER_OPERATOR)

_QUERYRESULTBATCH_MORERESULTSTYPE = _descriptor.EnumDescriptor(
  name='MoreResultsType',
  full_name='google.datastore.v1beta3.QueryResultBatch.MoreResultsType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='MORE_RESULTS_TYPE_UNSPECIFIED', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='NOT_FINISHED', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MORE_RESULTS_AFTER_LIMIT', index=2, number=2,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MORE_RESULTS_AFTER_CURSOR', index=3, number=4,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='NO_MORE_RESULTS', index=4, number=3,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=2524,
  serialized_end=2676,
)
_sym_db.RegisterEnumDescriptor(_QUERYRESULTBATCH_MORERESULTSTYPE)


_ENTITYRESULT = _descriptor.Descriptor(
  name='EntityResult',
  full_name='google.datastore.v1beta3.EntityResult',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='entity', full_name='google.datastore.v1beta3.EntityResult.entity', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='cursor', full_name='google.datastore.v1beta3.EntityResult.cursor', index=1,
      number=3, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _ENTITYRESULT_RESULTTYPE,
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=168,
  serialized_end=331,
)


_QUERY = _descriptor.Descriptor(
  name='Query',
  full_name='google.datastore.v1beta3.Query',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='projection', full_name='google.datastore.v1beta3.Query.projection', index=0,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='kind', full_name='google.datastore.v1beta3.Query.kind', index=1,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='filter', full_name='google.datastore.v1beta3.Query.filter', index=2,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='order', full_name='google.datastore.v1beta3.Query.order', index=3,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='distinct_on', full_name='google.datastore.v1beta3.Query.distinct_on', index=4,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='start_cursor', full_name='google.datastore.v1beta3.Query.start_cursor', index=5,
      number=7, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='end_cursor', full_name='google.datastore.v1beta3.Query.end_cursor', index=6,
      number=8, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='offset', full_name='google.datastore.v1beta3.Query.offset', index=7,
      number=10, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='limit', full_name='google.datastore.v1beta3.Query.limit', index=8,
      number=12, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=334,
  serialized_end=729,
)


_KINDEXPRESSION = _descriptor.Descriptor(
  name='KindExpression',
  full_name='google.datastore.v1beta3.KindExpression',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='google.datastore.v1beta3.KindExpression.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=731,
  serialized_end=761,
)


_PROPERTYREFERENCE = _descriptor.Descriptor(
  name='PropertyReference',
  full_name='google.datastore.v1beta3.PropertyReference',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='google.datastore.v1beta3.PropertyReference.name', index=0,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=763,
  serialized_end=796,
)


_PROJECTION = _descriptor.Descriptor(
  name='Projection',
  full_name='google.datastore.v1beta3.Projection',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='property', full_name='google.datastore.v1beta3.Projection.property', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=798,
  serialized_end=873,
)


_PROPERTYORDER = _descriptor.Descriptor(
  name='PropertyOrder',
  full_name='google.datastore.v1beta3.PropertyOrder',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='property', full_name='google.datastore.v1beta3.PropertyOrder.property', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='direction', full_name='google.datastore.v1beta3.PropertyOrder.direction', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _PROPERTYORDER_DIRECTION,
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=876,
  serialized_end=1095,
)


_FILTER = _descriptor.Descriptor(
  name='Filter',
  full_name='google.datastore.v1beta3.Filter',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='composite_filter', full_name='google.datastore.v1beta3.Filter.composite_filter', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='property_filter', full_name='google.datastore.v1beta3.Filter.property_filter', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='filter_type', full_name='google.datastore.v1beta3.Filter.filter_type',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=1098,
  serialized_end=1261,
)


_COMPOSITEFILTER = _descriptor.Descriptor(
  name='CompositeFilter',
  full_name='google.datastore.v1beta3.CompositeFilter',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='op', full_name='google.datastore.v1beta3.CompositeFilter.op', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='filters', full_name='google.datastore.v1beta3.CompositeFilter.filters', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _COMPOSITEFILTER_OPERATOR,
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1264,
  serialized_end=1443,
)


_PROPERTYFILTER = _descriptor.Descriptor(
  name='PropertyFilter',
  full_name='google.datastore.v1beta3.PropertyFilter',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='property', full_name='google.datastore.v1beta3.PropertyFilter.property', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='op', full_name='google.datastore.v1beta3.PropertyFilter.op', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='value', full_name='google.datastore.v1beta3.PropertyFilter.value', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _PROPERTYFILTER_OPERATOR,
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1446,
  serialized_end=1788,
)


_GQLQUERY_NAMEDBINDINGSENTRY = _descriptor.Descriptor(
  name='NamedBindingsEntry',
  full_name='google.datastore.v1beta3.GqlQuery.NamedBindingsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='google.datastore.v1beta3.GqlQuery.NamedBindingsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='value', full_name='google.datastore.v1beta3.GqlQuery.NamedBindingsEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=_descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001')),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=2002,
  serialized_end=2099,
)

_GQLQUERY = _descriptor.Descriptor(
  name='GqlQuery',
  full_name='google.datastore.v1beta3.GqlQuery',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='query_string', full_name='google.datastore.v1beta3.GqlQuery.query_string', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='allow_literals', full_name='google.datastore.v1beta3.GqlQuery.allow_literals', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='named_bindings', full_name='google.datastore.v1beta3.GqlQuery.named_bindings', index=2,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='positional_bindings', full_name='google.datastore.v1beta3.GqlQuery.positional_bindings', index=3,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[_GQLQUERY_NAMEDBINDINGSENTRY, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1791,
  serialized_end=2099,
)


_GQLQUERYPARAMETER = _descriptor.Descriptor(
  name='GqlQueryParameter',
  full_name='google.datastore.v1beta3.GqlQueryParameter',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='google.datastore.v1beta3.GqlQueryParameter.value', index=0,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='cursor', full_name='google.datastore.v1beta3.GqlQueryParameter.cursor', index=1,
      number=3, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='parameter_type', full_name='google.datastore.v1beta3.GqlQueryParameter.parameter_type',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=2101,
  serialized_end=2206,
)


_QUERYRESULTBATCH = _descriptor.Descriptor(
  name='QueryResultBatch',
  full_name='google.datastore.v1beta3.QueryResultBatch',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='skipped_results', full_name='google.datastore.v1beta3.QueryResultBatch.skipped_results', index=0,
      number=6, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='skipped_cursor', full_name='google.datastore.v1beta3.QueryResultBatch.skipped_cursor', index=1,
      number=3, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='entity_result_type', full_name='google.datastore.v1beta3.QueryResultBatch.entity_result_type', index=2,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='entity_results', full_name='google.datastore.v1beta3.QueryResultBatch.entity_results', index=3,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='end_cursor', full_name='google.datastore.v1beta3.QueryResultBatch.end_cursor', index=4,
      number=4, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='more_results', full_name='google.datastore.v1beta3.QueryResultBatch.more_results', index=5,
      number=5, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _QUERYRESULTBATCH_MORERESULTSTYPE,
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=2209,
  serialized_end=2676,
)

_ENTITYRESULT.fields_by_name['entity'].message_type = google_dot_datastore_dot_v1beta3_dot_entity__pb2._ENTITY
_ENTITYRESULT_RESULTTYPE.containing_type = _ENTITYRESULT
_QUERY.fields_by_name['projection'].message_type = _PROJECTION
_QUERY.fields_by_name['kind'].message_type = _KINDEXPRESSION
_QUERY.fields_by_name['filter'].message_type = _FILTER
_QUERY.fields_by_name['order'].message_type = _PROPERTYORDER
_QUERY.fields_by_name['distinct_on'].message_type = _PROPERTYREFERENCE
_QUERY.fields_by_name['limit'].message_type = google_dot_protobuf_dot_wrappers__pb2._INT32VALUE
_PROJECTION.fields_by_name['property'].message_type = _PROPERTYREFERENCE
_PROPERTYORDER.fields_by_name['property'].message_type = _PROPERTYREFERENCE
_PROPERTYORDER.fields_by_name['direction'].enum_type = _PROPERTYORDER_DIRECTION
_PROPERTYORDER_DIRECTION.containing_type = _PROPERTYORDER
_FILTER.fields_by_name['composite_filter'].message_type = _COMPOSITEFILTER
_FILTER.fields_by_name['property_filter'].message_type = _PROPERTYFILTER
_FILTER.oneofs_by_name['filter_type'].fields.append(
  _FILTER.fields_by_name['composite_filter'])
_FILTER.fields_by_name['composite_filter'].containing_oneof = _FILTER.oneofs_by_name['filter_type']
_FILTER.oneofs_by_name['filter_type'].fields.append(
  _FILTER.fields_by_name['property_filter'])
_FILTER.fields_by_name['property_filter'].containing_oneof = _FILTER.oneofs_by_name['filter_type']
_COMPOSITEFILTER.fields_by_name['op'].enum_type = _COMPOSITEFILTER_OPERATOR
_COMPOSITEFILTER.fields_by_name['filters'].message_type = _FILTER
_COMPOSITEFILTER_OPERATOR.containing_type = _COMPOSITEFILTER
_PROPERTYFILTER.fields_by_name['property'].message_type = _PROPERTYREFERENCE
_PROPERTYFILTER.fields_by_name['op'].enum_type = _PROPERTYFILTER_OPERATOR
_PROPERTYFILTER.fields_by_name['value'].message_type = google_dot_datastore_dot_v1beta3_dot_entity__pb2._VALUE
_PROPERTYFILTER_OPERATOR.containing_type = _PROPERTYFILTER
_GQLQUERY_NAMEDBINDINGSENTRY.fields_by_name['value'].message_type = _GQLQUERYPARAMETER
_GQLQUERY_NAMEDBINDINGSENTRY.containing_type = _GQLQUERY
_GQLQUERY.fields_by_name['named_bindings'].message_type = _GQLQUERY_NAMEDBINDINGSENTRY
_GQLQUERY.fields_by_name['positional_bindings'].message_type = _GQLQUERYPARAMETER
_GQLQUERYPARAMETER.fields_by_name['value'].message_type = google_dot_datastore_dot_v1beta3_dot_entity__pb2._VALUE
_GQLQUERYPARAMETER.oneofs_by_name['parameter_type'].fields.append(
  _GQLQUERYPARAMETER.fields_by_name['value'])
_GQLQUERYPARAMETER.fields_by_name['value'].containing_oneof = _GQLQUERYPARAMETER.oneofs_by_name['parameter_type']
_GQLQUERYPARAMETER.oneofs_by_name['parameter_type'].fields.append(
  _GQLQUERYPARAMETER.fields_by_name['cursor'])
_GQLQUERYPARAMETER.fields_by_name['cursor'].containing_oneof = _GQLQUERYPARAMETER.oneofs_by_name['parameter_type']
_QUERYRESULTBATCH.fields_by_name['entity_result_type'].enum_type = _ENTITYRESULT_RESULTTYPE
_QUERYRESULTBATCH.fields_by_name['entity_results'].message_type = _ENTITYRESULT
_QUERYRESULTBATCH.fields_by_name['more_results'].enum_type = _QUERYRESULTBATCH_MORERESULTSTYPE
_QUERYRESULTBATCH_MORERESULTSTYPE.containing_type = _QUERYRESULTBATCH
DESCRIPTOR.message_types_by_name['EntityResult'] = _ENTITYRESULT
DESCRIPTOR.message_types_by_name['Query'] = _QUERY
DESCRIPTOR.message_types_by_name['KindExpression'] = _KINDEXPRESSION
DESCRIPTOR.message_types_by_name['PropertyReference'] = _PROPERTYREFERENCE
DESCRIPTOR.message_types_by_name['Projection'] = _PROJECTION
DESCRIPTOR.message_types_by_name['PropertyOrder'] = _PROPERTYORDER
DESCRIPTOR.message_types_by_name['Filter'] = _FILTER
DESCRIPTOR.message_types_by_name['CompositeFilter'] = _COMPOSITEFILTER
DESCRIPTOR.message_types_by_name['PropertyFilter'] = _PROPERTYFILTER
DESCRIPTOR.message_types_by_name['GqlQuery'] = _GQLQUERY
DESCRIPTOR.message_types_by_name['GqlQueryParameter'] = _GQLQUERYPARAMETER
DESCRIPTOR.message_types_by_name['QueryResultBatch'] = _QUERYRESULTBATCH

EntityResult = _reflection.GeneratedProtocolMessageType('EntityResult', (_message.Message,), dict(
  DESCRIPTOR = _ENTITYRESULT,
  __module__ = 'google.datastore.v1beta3.query_pb2'
  # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.EntityResult)
  ))
_sym_db.RegisterMessage(EntityResult)

Query = _reflection.GeneratedProtocolMessageType('Query', (_message.Message,), dict(
  DESCRIPTOR = _QUERY,
  __module__ = 'google.datastore.v1beta3.query_pb2'
  # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.Query)
  ))
_sym_db.RegisterMessage(Query)

KindExpression = _reflection.GeneratedProtocolMessageType('KindExpression', (_message.Message,), dict(
  DESCRIPTOR = _KINDEXPRESSION,
  __module__ = 'google.datastore.v1beta3.query_pb2'
  # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.KindExpression)
  ))
_sym_db.RegisterMessage(KindExpression)

PropertyReference = _reflection.GeneratedProtocolMessageType('PropertyReference', (_message.Message,), dict(
  DESCRIPTOR = _PROPERTYREFERENCE,
  __module__ = 'google.datastore.v1beta3.query_pb2'
  # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.PropertyReference)
  ))
_sym_db.RegisterMessage(PropertyReference)

Projection = _reflection.GeneratedProtocolMessageType('Projection', (_message.Message,), dict(
  DESCRIPTOR = _PROJECTION,
  __module__ = 'google.datastore.v1beta3.query_pb2'
  # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.Projection)
  ))
_sym_db.RegisterMessage(Projection)

PropertyOrder = _reflection.GeneratedProtocolMessageType('PropertyOrder', (_message.Message,), dict(
  DESCRIPTOR = _PROPERTYORDER,
  __module__ = 'google.datastore.v1beta3.query_pb2'
  # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.PropertyOrder)
  ))
_sym_db.RegisterMessage(PropertyOrder)

Filter = _reflection.GeneratedProtocolMessageType('Filter', (_message.Message,), dict(
  DESCRIPTOR = _FILTER,
  __module__ = 'google.datastore.v1beta3.query_pb2'
  # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.Filter)
  ))
_sym_db.RegisterMessage(Filter)

CompositeFilter = _reflection.GeneratedProtocolMessageType('CompositeFilter', (_message.Message,), dict(
  DESCRIPTOR = _COMPOSITEFILTER,
  __module__ = 'google.datastore.v1beta3.query_pb2'
  # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.CompositeFilter)
  ))
_sym_db.RegisterMessage(CompositeFilter)

PropertyFilter = _reflection.GeneratedProtocolMessageType('PropertyFilter', (_message.Message,), dict(
  DESCRIPTOR = _PROPERTYFILTER,
  __module__ = 'google.datastore.v1beta3.query_pb2'
  # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.PropertyFilter)
  ))
_sym_db.RegisterMessage(PropertyFilter)

GqlQuery = _reflection.GeneratedProtocolMessageType('GqlQuery', (_message.Message,), dict(

  NamedBindingsEntry = _reflection.GeneratedProtocolMessageType('NamedBindingsEntry', (_message.Message,), dict(
    DESCRIPTOR = _GQLQUERY_NAMEDBINDINGSENTRY,
    __module__ = 'google.datastore.v1beta3.query_pb2'
    # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.GqlQuery.NamedBindingsEntry)
    ))
  ,
  DESCRIPTOR = _GQLQUERY,
  __module__ = 'google.datastore.v1beta3.query_pb2'
  # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.GqlQuery)
  ))
_sym_db.RegisterMessage(GqlQuery)
_sym_db.RegisterMessage(GqlQuery.NamedBindingsEntry)

GqlQueryParameter = _reflection.GeneratedProtocolMessageType('GqlQueryParameter', (_message.Message,), dict(
  DESCRIPTOR = _GQLQUERYPARAMETER,
  __module__ = 'google.datastore.v1beta3.query_pb2'
  # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.GqlQueryParameter)
  ))
_sym_db.RegisterMessage(GqlQueryParameter)

QueryResultBatch = _reflection.GeneratedProtocolMessageType('QueryResultBatch', (_message.Message,), dict(
  DESCRIPTOR = _QUERYRESULTBATCH,
  __module__ = 'google.datastore.v1beta3.query_pb2'
  # @@protoc_insertion_point(class_scope:google.datastore.v1beta3.QueryResultBatch)
  ))
_sym_db.RegisterMessage(QueryResultBatch)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('\n\034com.google.datastore.v1beta3B\nQueryProtoP\001'))
_GQLQUERY_NAMEDBINDINGSENTRY.has_options = True
_GQLQUERY_NAMEDBINDINGSENTRY._options = _descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001'))
# @@protoc_insertion_point(module_scope)
