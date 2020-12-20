from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import StreamField
from wagtail.admin.edit_handlers import StreamFieldPanel, FieldPanel, PageChooserPanel, InlinePanel


from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class ContactPage(Page):
    max_count = 1
    parent_page_type = [
        'home.HomePage'
    ]

    # =============================STRUCT=====================================================
    contact_section = blocks.StructBlock([
        ("contact_type", blocks.CharBlock(
            required=False, blank=True, null=True)),
        ("contact_detail", blocks.CharBlock(
            max_lenght=500, required=True, blank=True, null=True)),
    ],
        null=True,
        black=True
    )

    contact_Block = StreamField([
        ("contact_section", contact_section)
    ], null=True)
    # ===========================================================================
    content_panels = Page.content_panels + [
        StreamFieldPanel("contact_Block")
    ]
