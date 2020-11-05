json.partial! '/api/tags/tag', tag:@tag
json.notes @tag.notes.map { |note| note.id }