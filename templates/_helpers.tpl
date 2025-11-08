{{- define "guestbook-ui.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "guestbook-ui.fullname" -}}
{{- printf "%s-%s" .Release.Name (include "guestbook-ui.name" .) | trunc 63 | trimSuffix "-" -}}
{{- end -}}
