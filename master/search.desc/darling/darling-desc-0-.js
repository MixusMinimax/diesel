searchState.loadedDescShard("darling", 0, "Darling\nAn error encountered during attribute parsing.\nCreate an instance by parsing a list of attributes.\nCreates an instance by parsing an entire proc-macro <code>derive</code> …\nCreates an instance by parsing an individual field and its …\nCreates an instance by parsing a specific <code>syn::GenericParam</code>…\nCreates an instance by parsing an entire generics …\nCreate an instance from an item in an attribute …\nCreates an instance by parsing an individual type_param …\nCreates an instance from a specified <code>syn::Variant</code>.\nAn alias of <code>Result</code> specific to attribute parsing.\nUtility types for working with the AST.\nThe <code>darling::Error</code> type, the multiple error <code>Accumulator</code>, …\nCreate an instance by parsing a list of attributes.\nCreate an instance from a bool literal in a value position.\nCreate an instance from a char literal in a value position.\nCreate an instance from <code>syn::DeriveInput</code>, or return an …\nCreate an instance from a list of nested meta items.\nCreate an instance from a <code>syn::Meta</code> by dispatching to the …\nWhen a field is omitted from a parent meta-item, <code>from_none</code> …\nCreate an instance from a string literal in a value …\nCreate an instance from a literal value of either …\nCreate an instance from <code>syn::Variant</code>, or return an error.\nCreate an instance from the presence of the word in the …\nTraits and types used for tracking the usage of generic …\nGenerator for <code>UsesLifetimes</code> impls that unions the used …\nGenerator for <code>UsesTypeParam</code> impls that unions the used …\nUtility types for attribute parsing.\nA struct or enum body.\nEquivalent to <code>syn::Fields</code>, but replaces the AST element …\nA mirror of <code>syn::GenericParam</code> which is generic over all …\nExtension trait for <code>GenericParam</code> to support getting values …\nA mirror of the <code>syn::Generics</code> type which can contain …\nThe type this GenericParam uses to represent type params …\nIf this GenericParam is a const param, get the underlying …\nIf this GenericParam is a lifetime, get the underlying …\nCreates a new <code>Data&lt;&amp;&#39;a V, &amp;&#39;a F&gt;</code> instance from <code>Data&lt;V, F&gt;</code>.\nIf this GenericParam is a type param, get the underlying …\nCreates an empty body of the same shape as the passed-in …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the <code>Fields</code> contains no fields.\nReturns <code>true</code> if this instance is <code>Data::Enum</code>.\nReturns true if this variant’s data makes it a newtype.\nReturns <code>true</code> if this instance is <code>Data::Struct</code>.\nReturns the number of fields in the structure.\nApplies a function <code>V -&gt; U</code> on enum variants, if this is an …\nApplies a function to the <code>Fields</code> if this is a struct.\nApplies a function <code>F -&gt; U</code> on struct fields, if this is a …\nCreates a new <code>Fields</code> struct.\nSplits the <code>Fields</code> into its style and fields for further …\nConsumes the <code>Data</code>, returning <code>Vec&lt;V&gt;</code> if it was an enum.\nConsumes the <code>Data</code>, returning <code>Fields&lt;F&gt;</code> if it was a struct.\nCreates an empty body of the same shape as the passed-in …\nAttempt to convert from a <code>syn::Data</code> instance.\nAdds a <code>Span</code> to <code>Fields</code>.\nAccumulator for errors, for helping call <code>Error::multiple</code>.\nAn error encountered during attribute parsing.\nAn iterator that moves out of an <code>Error</code>.\nAn alias of <code>Result</code> specific to attribute parsing.\nCreates an error collector, for aggregating multiple errors\nConsider additional field names as “did you mean” …\nAdds a location to the error, such as a field or variant. …\nAdds a location to the error, such as a field or variant. …\nFinish the current accumulation, and if there are no …\nCreates a new error with a custom message.\nCreates a new error for a field that appears twice in the …\nCreates a new error for a field that appears twice in the …\nGet the span for <code>self</code>, if one has been set.\nStop accumulating errors, producing <code>Ok</code> if there are no …\nBundles the collected errors if there were any, or returns …\nRecursively converts a tree of errors to a flattened list.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nHandles a possible error.\nRuns a closure, returning the successful value as <code>Some</code>, or …\nCheck if this error is associated with a span in the token …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the accumulated errors as a <code>Vec</code>.\nGets the number of individual errors in this error.\nCreates a new error for a non-optional field that does not …\nBundle a set of multiple errors into a single <code>Error</code> …\nAdd one error to the collection.\nGet a span for the error.\nCreates a new error for a list which did not get enough …\nCreates a new error when a list got more items than it …\nCreates a new error for a field which has an unexpected …\nCreates a new error for a field which has an unexpected …\nCreates a new error for a field name that appears in the …\nCreates a new error for a field name that appears in the …\nCreates a new error for a field name that appears in the …\nCreates a new error for a field name that appears in the …\nCreates a new error for a value which doesn’t match a …\nCreates a new error for a struct or variant that does not …\nTie a span to the error if none is already present. This …\nWrite this error and any children as compile errors into a …\nThe tracing is being used to generate an <code>impl</code> block.\nSearcher for finding lifetimes in an iterator.\nSearcher for finding type params in an iterator.\nThe tracing is being used to generate a new struct or enum.\nExtension trait for pulling specific generics data from a …\nA set of references to idents.\nA set of idents.\nA set of references to lifetimes.\nA set of lifetimes.\nControl struct for searching type parameters.\nThe goal of tracing generic parameter usage.\nSearcher for finding lifetimes in a syntax tree. This can …\nSearcher for finding type params in a syntax tree. This …\nConsume an iterator, accumulating all lifetimes in the …\nConsume an iterator using <code>collect_lifetimes</code>, then clone …\nConsume an iterator, accumulating all type parameters in …\nConsume an iterator using <code>collect_type_params</code>, then clone …\nGet the set of all lifetimes declared by the syntax …\nGet the set of all type parameters declared by the syntax …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns <code>true</code> if the implementer of <code>UseTypeParams</code> should …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the subset of the queried lifetimes that are used …\nFind all used lifetimes, then clone them and return that …\nReturns the subset of the queried type parameters that are …\nFind all type params using <code>uses_type_params</code>, then clone …\nGet the “shape” of a fields container, such as a …\nExplicitly set the value.\nA meta-item that can be present as a word - with no value …\nA wrapper for an <code>Ident</code> which also keeps the value as a …\nAn efficient way of discarding data from a syntax element.\nInherit the eventual value from an external source.\nA set of named fields, e.g. <code>{ field: String }</code>.\nA special case of <code>Tuple</code> with exactly one field, e.g. …\nA value which can inherit a default value or have an …\nA list of <code>syn::Path</code> instances. This type is used to …\nDescription of how fields in a struct or variant are …\nA set of <code>Shape</code> values, which correctly handles the …\nA value and an associated position in source code. The …\nA list of unnamed fields, e.g. <code>(String, u64)</code>.\nNo fields, e.g. <code>struct Example;</code>\nA container to parse some syntax and retain access to the …\nGet the ident as a <code>proc_macro2::Ident</code>.\nConverts from <code>Override&lt;T&gt;</code> to <code>Override&lt;&amp;mut T&gt;</code>.\nConverts from <code>Override&lt;T&gt;</code> to <code>Override&lt;&amp;T&gt;</code>.\nGet the “shape” of a fields container.\nGet the ident as a string.\nCheck if a field container’s shape is in this set of …\nCheck if a fields container’s shape is in this set.\nConverts from <code>Override&lt;T&gt;</code> to <code>Option&lt;T&gt;</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInsert a shape into the set, so that the set will match …\nInsert all possible shapes into the set.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether this set is empty.\nReturns <code>true</code> if the override is an <code>Explicit</code> value.\nCheck if the flag is present.\nApply some transform to the ident’s string …\nApply a mapping function to a reference to the spanned …\nCreate a new <code>IdentString</code>.\nCreate a new list.\nCreate a new <code>ShapeSet</code> which includes the specified items.\nTry to parse an attribute into a meta list. Path-type meta …\nFunctions to use with <code>#[darling(with = &quot;...&quot;)]</code> that …\nTransform Rust paths to a readable and comparable string.\nCreates a new <code>Flag</code> which corresponds to the presence of a …\nGet the span of the flag, or <code>Span::call_site</code> if the flag …\nGet the location of this <code>Ident</code> in source.\nGet the source code location referenced by this struct.\nCreate a new <code>Vec</code> containing the string representation of …\nUnwraps an override, yielding the content of an <code>Explicit</code>. …\nReturns the contained value or the default value of <code>T</code>.\nUnwraps an override, yielding the content of an <code>Explicit</code>. …\nParse a <code>Meta</code> to an <code>Expr</code>; if the value is a string literal, …\nParse a <code>Meta</code> to an <code>Expr</code>; if the value is a string literal, …")