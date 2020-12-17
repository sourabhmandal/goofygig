# Generated by Django 3.1.4 on 2020-12-17 05:38

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0011_auto_20201217_1103'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='team_detail',
            field=wagtail.core.fields.StreamField([('Member_Card', wagtail.core.blocks.StructBlock([('member_card', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('profile_pic', wagtail.images.blocks.ImageChooserBlock(required=True)), ('name', wagtail.core.blocks.CharBlock(blank=True, null=True, required=True)), ('tagline', wagtail.core.blocks.CharBlock(blank=True, null=True, required=True)), ('number_of_jobs', wagtail.core.blocks.IntegerBlock(blank=True, null=True, required=True)), ('skill_tags', wagtail.core.blocks.StructBlock([('skill_tag', wagtail.core.blocks.CharBlock(blank=True, null=True, required=True))])), ('more_detail', wagtail.core.blocks.PageChooserBlock(blank=True, null=True, required=True))]), blank=True, null=True))]))], blank=True, null=True),
        ),
    ]